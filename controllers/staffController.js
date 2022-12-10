const Staff = require('../models/staff')

exports.index = async(req, res, next) => {
      // res.send('respond with a resource');

      const staff = await Staff.find()

      res.status(200).json({
        data: staff
      })
    };

exports.insert = async (req, res, next) => {
        // res.send('respond with a resource');

        const { name,salary } = req.body

        let staff = new Staff({
            name: name,    //database ,input
            salary: salary,
        });
        await staff.save()

        res.status(200).json({
          Message: "เพิ่มข้อมูลเรียบร้อยแล้ว",
        })
      };