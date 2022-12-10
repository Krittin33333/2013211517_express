const Staff = require('../models/staff')

exports.index = async(req, res, next) => {
      // res.send('respond with a resource');

      const staff = await Staff.find().sort({_id: -1})

      res.status(200).json({
        data: staff
      })
    };

exports.show = async(req, res, next) => {
        
    // by id
    try{
        const { id } = req.params
  
        const staff = await Staff.findOne({
            _id : id
        })
  
        if(!staff){
            throw new Error('ไม่พบผู้ใช้งาน')
        }
        else{
            res.status(200).json({
                data: staff
              })
        }

        
    } catch (error){
        res.status(400).json({
            error: { Message:"เกิดข้อผิดพลาด : " + error.message}
          })
    }
        
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

exports.destroy = async(req, res, next) => {
        
        // by id
        try{
            const { id } = req.params
      
            const staff = await Staff.deleteOne({
                _id : id
            })
            
            if(staff.deletedCount === 0){
                throw new Error('ไม่สามารถลบข้อมูลได้ / ไม่พบผู้ใช้งาน')
            }
            else{
                res.status(200).json({
                    message: "ลบข้อมูลเรียบร้อยแล้ว",
                  })
            }
            
        } catch (error){
            res.status(400).json({
                error: { Message:"เกิดข้อผิดพลาด : " + error.message}
              })
        }
            
          };

exports.update = async (req, res, next) => {
            

        try{
            const { id } = req.params
            const { name,salary } = req.body

            // 1
            // const staff = await Staff.findById(id)
            // staff.name = name
            // staff.salary = salary
            // await staff.save()

            // 2
            // const staff = await Staff.findByIdAndUpdate(id,{
            //     name : name,
            //     salary : salary
            // })

             const staff = await Staff.updateOne({ _id : id},{
                name : name,
                salary : salary
            })

            console.log(staff)


            res.status(200).json({
              Message: "แก้ไขข้อมูลเรียบร้อยแล้ว",
            })

        } catch (error){

        }
    
         
          };