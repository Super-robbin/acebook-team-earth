const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const express = require("express");
// const router = express.Router();

const PostsController = require("../controllers/posts");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images'); 
    },
    filename: (req, file, cb) => {
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });

router.get("/", PostsController.Index);
router.post("/", upload.single('image'), PostsController.Create);
router.post("/:post_id/like", PostsController.AddLike);

module.exports = router;
