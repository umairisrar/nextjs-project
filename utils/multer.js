import multer from "multer";

const storage = multer.diskStorage({
  destination: "./public/images/", // Set the destination folder
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export default upload;
