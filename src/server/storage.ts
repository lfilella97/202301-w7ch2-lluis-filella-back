import multer from "multer";

import { v4 as uuidv4 } from "uuid";

const fileId = uuidv4;

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "uploads/");
  },
  filename(req, file, callback) {
    callback(null, `${fileId()}-${file.originalname}`);
  },
});

export default storage;
