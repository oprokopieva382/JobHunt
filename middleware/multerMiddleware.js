import multer from "multer";

const multerStorage = multer.diskStorage({
  // directory where uploaded avatars will be stored
  destination: (req, file, callback) => {
    callback(null, "public/uploaded");
  },
  filename: (req, file, callback) => {
    const avatarName = file.originalname;
    // name of the uploaded avatar
    callback(null, avatarName);
  },
});

export const profileAvatarUpload = multer({multerStorage})