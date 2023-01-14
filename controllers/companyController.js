const Company = require("../models/company");

exports.index = async (req, res, next) => {
  // res.send('respond with a resource');
  const company = await Company.find();

  res.status(200).json({
    data: company,
  });
};

exports.insert = async (req, res, next) => {
  // res.send('respond with a resource');

  const { name, province } = req.body;

  let company = new Company({
    name: name,
    address: {
      province: province,
    },
  });
  await company.save();

  res.status(200).json({
    Message: "เพิ่มข้อมูลเรียบร้อยแล้ว",
  });
};

exports.destroy = async (req, res, next) => {
  // by id
  try {
    const { id } = req.params;

    const company = await Company.deleteOne({
      _id: id,
    });

    if (company.deletedCount === 0) {
      const error = new Error("เกิดข้อผิดพลาด : ไม่สามารถลบข้อมูลได้ / ไม่พบผู้ใช้งาน");
      error.statusCode = 400;
      throw error;
      //     throw new Error('ไม่สามารถลบข้อมูลได้ / ไม่พบผู้ใช้งาน')
    } else {
      res.status(200).json({
        message: "ลบข้อมูลเรียบร้อยแล้ว",
      });
    }
  } catch (error) {
    next(error)
  }
};

exports.show = async (req, res, next) => {
  // by id
  try {
    const { id } = req.params;

    const company = await Company.findOne({
      _id: id,
    });

    if (!company) {
      const error = new Error("ไม่พบผู้ใช้งาน");
      error.statusCode = 400;
      throw error;
      //throw new Error("ไม่พบผู้ใช้งาน");
    } else {
      res.status(200).json({
        data: company,
      });
    }
  } catch (error) {
    next(error)
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, province } = req.body;

    // const company = await Company.findById(id);
    // company.name = name;
    // company. address.province = province;
    // await company.save();

    const company = await Company.findByIdAndUpdate(id, {
      name: name,
      address: {
        province: province,
      },
    });

    // const company = await Company.updateOne(
    //   { _id: id },
    //   {
    //     name: name,
    //     address: {
    //       province: province,
    //     },
    //   }
    // );

    console.log(company);

    res.status(200).json({
      message: "แก้ไขข้อมูลเรียบร้อยแล้ว",
    });
  } catch (error) {
    next(error)
  }
};

// exports.bio = (req, res, next) => {

//   res.status(200).json({
//     fullname: 'Krittin kamkar',
//     nickname: 'Aom',
//     hobby:'Sleep',
//     gitusername: 'Krittin33333'
//   })

// };

// exports.company = (req, res, next) => {

//   res.status(200).json({
// data:[{
//     id: 1,
//     name: 'Techno Brave Asia',
//     address: {
//         province: 'Bangkok',
//         postcode: '10400'
//     }},{
//           id: 2,
//           name: 'M.SOFT (Thailand)',
//           address: {
//               province: 'Bangkok',
//               postcode: '10120'
//           }},{
//           id: 3,
//           name: 'C.S.I. Group',
//           address: {
//               province: 'Bangkok',
//               postcode: '10500'
//           }}

//   ]
//   })

// };
