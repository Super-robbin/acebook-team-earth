const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const express = require("express");
// const router = express.Router();

const PostsController = require("../controllers/posts");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../public/images')); 
    },
    filename: (req, file, cb) => {
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    console.log('file filter')
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    console.log(file)
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });

router.get("/", PostsController.Index);
router.post("/", upload.single('image'), PostsController.Create);

module.exports = router;
