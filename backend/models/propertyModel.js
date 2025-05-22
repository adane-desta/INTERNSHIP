
import db from '../config/db.js'
import fs from  'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const propertyModel = {

    addNewProperty: async (newProperty, images) => {
        const connection = await db.getConnection();
        await connection.beginTransaction();

        try {
            // Insert property data
            const [propertyResult] = await connection.query(
                `insert into ethionest.properties (owner_id , title , description , type , rentorsell , address , bedrooms , 
                    bathrooms, size_sq_m , price , negotiable, year_built , specific_place, kebele)
                    values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,

[2, newProperty.title, newProperty.description, newProperty.type, newProperty.for, newProperty.address,
newProperty.bedrooms, newProperty.bathrooms, newProperty.area, newProperty.price, newProperty.negotiable,
newProperty.year, newProperty.sp_location, newProperty.kebele ]   
            );
            
            const propertyId = propertyResult.insertId;

            // Handle image uploads
            if (images && images.length > 0) {
                const uploadDir = path.join(__dirname, '../public/images');
                
                // Create directory if it doesn't exist
                if (!fs.existsSync(uploadDir)) {
                    fs.mkdirSync(uploadDir, { recursive: true });
                }

                const imagePromises = images.map(async (image, index) => {
                    const imageName = `property_${propertyId}_${Date.now()}_${index}${path.extname(image.originalname)}`;
                    const imagePath = path.join(uploadDir, imageName);
                    
                    // Save image to filesystem
                    await fs.promises.writeFile(imagePath, image.buffer);
                    
                    // Save to database
                    await connection.query(
                        'INSERT INTO property_images (property_id, image_path, is_main) VALUES (?, ?, ?)',
                        [propertyId, `/images/${imageName}`, index === 0] // First image is main
                    );
                });

                await Promise.all(imagePromises);
            }

            await connection.commit();
            return propertyId;
        } catch (error) {
            await connection.rollback();
            throw error;
        } finally {
            connection.release();
        }
    },

    getProperties: async() =>{

        const connection = await db.getConnection()
        await connection.beginTransaction()

        try{

            const [properties] = await connection.query(
                `select * from properties;`
            )

            await connection.commit()
            return properties
        }catch(error){
            await connection.rollback()
            throw error
        }finally{
             connection.release()
        }

    }
}

export default propertyModel