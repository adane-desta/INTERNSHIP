
import propertyModel from '../models/propertyModel.js'

const propertyController = {

    addNewProperty: async (req, res) => {
        try {
            const newProperty = req.body;
            const images = req.files; 

            const propertyId = await propertyModel.addNewProperty(newProperty, images);
            res.status(201).json({ property_id: propertyId });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getProperties: async(req , res) => {

        try{

            const properties = await propertyModel.getProperties();
            res.status(200).json(properties)

        }catch(error){

            res.status(500).json({error: error.message})
       }

    }
}
export default propertyController