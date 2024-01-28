const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Adjust the path if needed

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
});

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const BasketDevice = sequelize.define('basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
});

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
});

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
});

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
});

const DeviceInfo = sequelize.define('deviceInfo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
});

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

User.hasOne(Basket);//User has one Basket
Basket.belongsTo(User);//Basket belongs to User

User.hasMany(Rating);//User has many Rating
Rating.belongsTo(User);//Rating belongs to User

Basket.hasMany(BasketDevice);//One Basket has many BasketDevice
BasketDevice.belongsTo(Basket);//BasketDevice belongs to Basket

Type.hasMany(Device);//One Type has many Device
Device.belongsTo(Type);//Device belongs to Type

Brand.hasMany(Device);//One Brand has many Device
Device.belongsTo(Brand);//Device belongs to Brand

Device.hasMany(Rating);//One Device has many Rating
Rating.belongsTo(Device);//Rating belongs to Device

Device.hasMany(DeviceInfo, {as: 'info'});//One Device has many DeviceInfo
DeviceInfo.belongsTo(Device);//DeviceInfo belongs to Device

Type.belongsToMany(Brand, {through: TypeBrand});//One Type has many Brand
Brand.belongsToMany(Type, {through: TypeBrand});//One Brand has many Type

module.exports = { Type, Brand, Rating, TypeBrand, User, Basket, BasketDevice, Device, DeviceInfo };