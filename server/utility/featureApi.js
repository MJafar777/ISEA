class FeatureAPI {
  constructor(cleintQuery, dataBaseQuery) {
    this.cleintQuery = cleintQuery;
    this.dataBaseQuery = dataBaseQuery;
  }
  filter() {
    //---- Basic filter

    //1-usul

    // const filter = await Tour.find(req.query);

    //2-usul

    // const filter = await Tour.find().where('duration').gte(15).equals(2);

    //---- Advanced filter

    // /api/v1/tours?price[gt]=400 shuni gt sini oldiga $-> belgisini qoshib jonatamiz
    // /api/v1/tours?price[$gt]=400 -->shunday qilib

    const deleteQuery = ["sort", "page", "limit", "field"];
    let querycha = { ...this.cleintQuery };
    deleteQuery.forEach((val) => {
      delete querycha[val];
    });

    querycha = JSON.stringify(querycha);

    querycha = querycha.replace(/\bgt|gte|lte|lt\b/g, (val) => `$${val}`);

    let queryData = JSON.parse(querycha);

    this.dataBaseQuery = this.dataBaseQuery.find(queryData);
    return this;
  }

  sorting() {
    console.log(this.cleintQuery);
    if (this.cleintQuery.sort) {
      console.log("sortga kirdi");
      // /api/v1/tours?sort=duration,price ---> ikkita ushta narsani sort qilmoqchi bolsak vergul bilan yozamiz lekin sortni ichiga joy tashab yozish kerak
      let sortData = this.cleintQuery.sort.split(","); //-->[duration,data]
      sortData = sortData.join(" "); //-->"duration data"
      this.dataBaseQuery = this.dataBaseQuery.sort(sortData);
    } else {
      this.dataBaseQuery = this.dataBaseQuery.sort("-createdAt");
    }
    return this;
  }
  field() {
    if (this.cleintQuery.field) {
      // /api/v1/tours?field=duration,price ---> ikkita ushta narsani field qilmoqchi bolsak vergul bilan yozamiz lekin select ichiga joy tashab yozish kerak
      let fieldData = this.cleintQuery.field.split(","); //-->[duration,data]
      fieldData = fieldData.join(" "); //-->"duration data"
      this.dataBaseQuery = this.dataBaseQuery.select(fieldData);
    } else {
      this.dataBaseQuery = this.dataBaseQuery.select("-__v"); // oldiga minus qoysak oshani olib kelmaydi
    }
    return this;
  }
  pagination() {
    const page = this.cleintQuery.page || 1;
    const limit = this.cleintQuery.limit;
    this.dataBaseQuery = this.dataBaseQuery
      .skip((page - 1) * limit)
      .limit(limit);
    return this;
  }
}

module.exports = FeatureAPI;
