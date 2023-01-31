import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelizeConnection from "../config.js";


interface User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    id: CreationOptional<number>;
    email: string;
    password: string;
};

export interface DeviceModel extends Model<InferAttributes<DeviceModel>, InferCreationAttributes<DeviceModel>> {
    id: CreationOptional<number>;
    name: string;
    price: number;
    rating?: number;
    img: string;
    BrandId?: ForeignKey<number>;
    TypeId?: ForeignKey<number>;
    
};

interface DeviceInfo extends Model<InferAttributes<DeviceInfo>,InferCreationAttributes<DeviceInfo>> {
    id: CreationOptional<number>;
    deviceId?: ForeignKey<number>;
    title: string;
    description: string;
};

interface Basket extends Model<InferAttributes<Basket>, InferCreationAttributes<Basket>> {
    id: CreationOptional<number>;
    
};

interface BasketDevice extends Model<InferAttributes<BasketDevice>, InferCreationAttributes<BasketDevice>> {
    id: CreationOptional<number>;
    
};

interface Rating extends Model<InferAttributes<Rating>,InferCreationAttributes<Rating>> {
    id: CreationOptional<number>;
    rate: Number;
};

interface Type extends Model<InferAttributes<Type>,InferCreationAttributes<Type>> {
    id: CreationOptional<number>;
    name: String;
};

interface Brand extends Model<InferAttributes<Brand>,InferCreationAttributes<Brand>> {
    id: CreationOptional<number>;
    name: string;
};

interface TypeBrand extends Model<InferAttributes<TypeBrand>,InferCreationAttributes<TypeBrand>> {
    id: CreationOptional<number>;
};


export const User = sequelizeConnection.define<User>('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
})

export const Basket = sequelizeConnection.define<Basket>('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

export const BasketDevice = sequelizeConnection.define<BasketDevice>('basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

export const Device = sequelizeConnection.define<DeviceModel>("device", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

export const Type = sequelizeConnection.define<Type>('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

export const Brand = sequelizeConnection.define<Brand>('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

export const Rating = sequelizeConnection.define<Rating>('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

export const DeviceInfo = sequelizeConnection.define<DeviceInfo>('device_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

export const TypeBrand = sequelizeConnection.define<TypeBrand>('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});


Device.hasMany(BasketDevice);
Device.hasMany(DeviceInfo, { as: "info" });
Device.hasMany(Rating);


Brand.hasMany(Device, { foreignKey: "BrandId" });
Device.belongsTo(Brand, {
    foreignKey: "BrandId"
});

Type.hasMany(Device, { foreignKey: "TypeId" });
Device.belongsTo(Type, {
    foreignKey: "TypeId"
});


Brand.belongsToMany(Type, {through: TypeBrand});
Type.belongsToMany(Brand, {through: TypeBrand});

Basket.hasMany(BasketDevice);
Basket.belongsTo(User);
BasketDevice.belongsTo(Basket);
BasketDevice.belongsTo(Device);

