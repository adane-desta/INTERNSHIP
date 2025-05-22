
import express from 'express'
import userController from '../controllers/userController.js'
import propertyController from '../controllers/propertyController.js'
import multer from 'multer';

const router = express.Router()

const upload = multer({
    storage: multer.memoryStorage(), 
    limits: {
        fileSize: 10 * 1024 * 1024, 
        files: 10 
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'), false);
        }
    }
});


router.get('/getusers' , userController.getUser)
router.post('/newproperty', upload.array('property-images', 10), propertyController.addNewProperty);
router.get('/getProperties', propertyController.getProperties)

export default router;