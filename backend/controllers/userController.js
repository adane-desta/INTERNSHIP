
import userModel from "../models/userModel.js"

const usercontroller = {

    

    getUser: async(req , res) => {
       console.log('incontroler');
        try{

            const users = await userModel.getUser();

            res.status(200).json(users)
        }catch(error){

            res.status(500).json({error: error.message})
        }

        

    }
}
export default usercontroller;