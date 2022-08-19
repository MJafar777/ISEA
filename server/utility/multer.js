const sharp = require("sharp");

const multer = require("multer"); // -->Fayllarni yuklash uchun req.file

const multerStorage = multer.memoryStorage(); // buffer ga saqlab qoyadi tezkor hotiraga

const filterImage = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
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

const uploadUserImage = upload.single("photo"); // biza bergan faylni tutvolib users papkaga joylashini qildik

const resizeImage = async (req, res, next) => {
  const randomNumber = Math.round(Math.random() * (9999 - 1000) + 9999);
  console.log(randomNumber);
  const ext = req.file.mimetype.split("/")[1]; // type .jpg .png va hokozo
  req.file.filename = `user-${randomNumber}-${Date.now()}.${ext}`;
  if (!req.file) {
    return next();
  }
  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .toFile(`${__dirname}/../public/img/users/${req.file.filename}`);
  next();
};

module.exports = {
  uploadUserImage,
  resizeImage,
};

// ---Multer---
