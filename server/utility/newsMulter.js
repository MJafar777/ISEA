const sharp = require("sharp");
const AppError = require("./appError");

const multer = require("multer"); // -->Fayllarni yuklash uchun req.file

const multerStorage = multer.memoryStorage(); // buffer ga saqlab qoyadi tezkor hotiraga

const filterImage = (req, file, cb, next) => {
  const ext = file.mimetype.split("/")[1];
  if (ext == "png" || ext == "jpg" || ext == "gif" || ext == "jpeg") {
    return cb(null, true);
  } else {
    cb(
      new AppError(
        "You can upload only image format! Sorry about unconvinience",
        false
      )
    );
  }
};

const upload = multer({
  // faylni qayerga saqlashi
  storage: multerStorage,
  fileFilter: filterImage,
});

const uploadNewsImage = upload.single("photo");

const resizeImage = async (req, res, next) => {
  const randomNumber = Math.round(Math.random() * (9999 - 1000) + 9999);
  const ext = req.file.mimetype.split("/")[1]; // type .jpg .png va hokozo
  req.file.filename = `news-${randomNumber}-${Date.now()}.${ext}`;
  if (!req.file) {
    return next();
  }
  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .toFile(`${__dirname}/../public/img/news/${req.file.filename}`);
  next();
};

module.exports = {
  uploadNewsImage,
  resizeImage,
};

// ---Multer---
