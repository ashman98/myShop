const{Device,DeviceInfo} = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');// for path module

class DeviceController{
    async create(req, res, next){
       try {
           let {name, price, brandId, typeId, info} = req.body;
           const {img} = req.files; // we can use express-fileupload for get
           let fileName = uuid.v4() + ".jpg"; // generate random name for img use uuid pack
           await img.mv(path.resolve(
               __dirname, // get dir name server/controllers
               '..', // go up one level
               'static', // and go static dir
               fileName // save img
           ));  // save img in static
           const device = await Device.create({name, price, brandId, typeId, img: fileName});

           if (info)
           {
               info = JSON.parse(info);
               info.forEach((item) =>{
                   DeviceInfo.create({
                       title: item.title,
                       description: item.description,
                       deviceId: device.id
                   });
               });
           }

           return res.json(device);
       }catch (e){
           next(ApiError.badRequest(e.message));
       }
    }

    async getAll(req, res){
        let {brandId, typeId, limit, page} = req.query;
        page = page || 1;
        limit = limit || 9;
        const offset = page * limit - limit;

        let devices;
        if(!brandId && !typeId){
            devices = await Device.findAndCountAll(limit, offset);
        }
        if(brandId && !typeId){
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset});
        }
        if(!brandId && typeId){
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset});
        }
        if(brandId && typeId){
            devices = await Device.findAndCountAll({where: {brandId, typeId}, limit, offset});
        }
        return res.json(devices);
    }

    async getOne(req, res){
        const {id} = req.params;
        const device = await Device.findOne({
            where: {id},
            include: [{
                model:DeviceInfo,
                as:"info"
            }]
        });
        return res.json(device);
    }
}

module.exports = new DeviceController()