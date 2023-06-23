import {Router} from 'express';
import * as ApiController from '../controllers/apiController';

import multer from 'multer';


const upload = multer({
    dest: './tmp'
});

const router = Router(); 

//rota para upload dos arquivos

router.post('/upload',upload.single('avatar'), ApiController.uploadFile);


export default router;