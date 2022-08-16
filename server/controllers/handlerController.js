const catchErrBig = require("../../utility/catchErrBig");
const FeatureAPI = require("../utility/featureApi");

const responseFunction = (res, statusCode, data) => {
  if (Array.isArray(data)) {
    res.status(statusCode).json({
      status: "success",
      results: data.length,
      data: data,
    });
  } else {
    res.status(statusCode).json({
      status: "success",
      data: data,
    });
  }
};

const getAll = catchErrBig(async (req, res, next, Model, options, options2) => {
  let datas;
  const filter = new FeatureAPI(req.query, Model)
    .filter()
    .sorting()
    .field()
    .pagination();
  if (options2) {
    datas = await filter.dataBaseQuery.populate(options).populate(options2);
  } else if (options) {
    datas = await filter.dataBaseQuery.populate(options);
  } else {
    datas = await filter.dataBaseQuery;
  }

  responseFunction(res, 200, datas);
});

const getOne = catchErrBig(async (req, res, next, Model, options, options2) => {
  let datas;
  if (options) {
    datas = await Model.findById(req.params.id).populate(options);
  } else if (options2) {
    datas = await Model.findById(req.params.id)
      .populate(options)
      .populate(options2);
    options2;
  } else {
    datas = await Model.find();
  }
  responseFunction(res, 200, datas);
});

const add = catchErrBig(async (req, res, next, Model) => {
  const datas = await Model.create(req.body);
  responseFunction(res, 201, datas);
});

const update = catchErrBig(async (req, res, next, Model) => {
  const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  responseFunction(res, 201, data);
});

const deleteData = catchErrBig(async (req, res, next, Model) => {
  const data = await Model.findByIdAndDelete(req.params.id);
  responseFunction(res, 201, data);
});

module.exports = {
  getAll,
  getOne,
  add,
  update,
  deleteData,
};
