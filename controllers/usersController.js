const User = require("../models/user");
const { validationResult } = require("express-validator");

exports.index = (req, res, next) => {
  // res.send('respond with a resource');

  res.status(200).json({
    Fullname: "Krittin kamkar",
  });
};

exports.bio = (req, res, next) => {
  res.status(200).json({
    fullname: "Krittin kamkar",
    nickname: "Aom",
    hobby: "Sleep",
    gitusername: "Krittin33333",
  });
};

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    

    const exitEmail = await User.findOne({ email: email });

    // if (exitEmail) {
    //   const error = new Error("อีเมลนี้มีผู้ใช้งานแล้ว")
    //   error.statusCode = 400
    //   throw error;

    // }
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("ข้อมูลที่ได้รับมาไม่ถูกต้อง");
      error.statusCode = 422;
      error.validation = errors.array();
      throw error;
    }
    // validation


    let user = new User();
    user.name = name;
    user.email = email;
    user.password = await user.encryptPassword(password);

    await user.save();

    res.status(201).json({
      message: "ลงทะเบียนเรียบร้อย",
    });
  } catch (error)
  {
    next(error)
  }
 
};
