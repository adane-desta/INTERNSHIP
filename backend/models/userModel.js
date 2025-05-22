

import db from '../config/db.js'

const userModel = {

    getUser: async() =>{
        console.log('inmodel');
        const connection = await db.getConnection();

        await connection.beginTransaction();

        try{

            const [users] = await connection.query(
                'select * from users where role != "admin" '
            )

           await connection.commit()
            return users;

        }catch(error){

            await connection.rollback()

            throw error


        }finally{

            connection.release()
        }

    }
}

export default userModel