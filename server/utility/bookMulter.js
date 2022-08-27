const sharp = require("sharp");
const multer = require("multer"); // -->Fayllarni yuklash uchun req.file
const AppError = require("./appError");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(1);
    cb(null, `${__dirname}/../public/img/books`);
  },
  filename: (req, file, cb) => {
    console.log();
    const randomNumber = Math.round(Math.random() * (9999 - 1000) + 9999);
    const ext1 = file.originalname.split(".");
    const ext2 = ext1.length;
    const ext = ext1[ext2 - 1];
    const uniquiName = `book-${randomNumber}-${Date.now()}.${ext}`;
    cb(null, uniquiName);
  },
});

// const multerStorage = multer.memoryStorage(); // buffer ga saqlab qoyadi tezkor hotiraga

const filterImage = (req, file, cb) => {
  console.log(file);
  const ext1 = file.originalname.split(".");
  const ext2 = ext1.length;

  const ext = ext1[ext2 - 1];

  console.log(ext);

  if (
    ext == "pptx" ||
    ext == "pptm" ||
    ext == "ppt" ||
    ext == "pdf" ||
    ext == "png" ||
    ext == "jpg" ||
    ext == "gif" ||
    ext == "jpeg"
  ) {
    return cb(null, true);
  } else {
    cb(
      new AppError(
        "You can upload only file and Image format! Sorry about unconvinience",
        false
      )
    );
  }
};

const upload = multer({
  storage,
  fileFilter: filterImage,
  limits: {
    fileSize: 10000000,
  },
});

const uploadProjectFile = upload.fields([
  {
    name: "book",
    maxCount: 1,
  },
  {
    name: "bookImage",
    maxCount: 1,
  },
]);

module.exports = {
  uploadProjectFile,
};

// ---Multer---------------------------
