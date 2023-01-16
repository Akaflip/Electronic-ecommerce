import { InferAttributes, InferCreationAttributes, Model, DataTypes, ForeignKey, } from "sequelize";
import sequelize from "sequelize/types/sequelize";
import Basket from "./basket.model";
import Device from "./device.model";
import User from "./user.model";


class BasketDevice extends Model<InferAttributes<BasketDevice>, InferCreationAttributes<BasketDevice>> {
    id: Number;
    basketId: ForeignKey<number>;
    deviceId: ForeignKey<number>;
    
};

BasketDevice.belongsTo(Basket);
BasketDevice.belongsTo(Device);

BasketDevice.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    
}, { tableName: 'BasketDevice',
sequelize });

export default BasketDevice;