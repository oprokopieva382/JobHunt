import multer from "multer";
import DataParser from "datauri/parser.js";
import path from "path";

const storage = multer.memoryStorage();

export const profileAvatarUpload = multer({ storage });

const parser = new DataParser();

const imageFormat = (file) => {
  const fileExtension = path.extname(file.originalname).toString();
  return parser.format(fileExtension, file.buffer).content;
};

export default imageFormat;
