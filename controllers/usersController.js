const User = require("../models/user");

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

    if (exitEmail) {
      const error = new Error("อีเมลนี้มีผู้ใช้งานแล้ว")
      error.statusCode = 400
      throw error;

    }

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
