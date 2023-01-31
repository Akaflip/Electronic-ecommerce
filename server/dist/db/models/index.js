import { DataTypes } from "sequelize";
import sequelizeConnection from "../config.js";
;
;
;
;
;
;
;
;
;
export const User = sequelizeConnection.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true, },
    password: { type: DataTypes.STRING },
});
export const Basket = sequelizeConnection.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
export const BasketDevice = sequelizeConnection.define('basket_device', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
export const Device = sequelizeConnection.define("device", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.INTEGER, defaultValue: 0 },
    img: { type: DataTypes.STRING, allowNull: false },
});
export const Type = sequelizeConnection.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});
export const Brand = sequelizeConnection.define('brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});
export const Rating = sequelizeConnection.define('rating', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rate: { type: DataTypes.INTEGER, allowNull: false },
});
export const DeviceInfo = sequelizeConnection.define('device_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
});
export const TypeBrand = sequelizeConnection.define('type_brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
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
Brand.belongsToMany(Type, { through: TypeBrand });
Type.belongsToMany(Brand, { through: TypeBrand });
Basket.hasMany(BasketDevice);
Basket.belongsTo(User);
BasketDevice.belongsTo(Basket);
BasketDevice.belongsTo(Device);
//# sourceMappingURL=index.js.map