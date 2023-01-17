import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "sequelize/types/sequelize";
import Device from "./device.model.js";


class DeviceInfo extends Model<InferAttributes<DeviceInfo>,InferCreationAttributes<DeviceInfo>> {
    id: Number;
    deviceId: ForeignKey<number>;
    title: String;
    description: String;
};

DeviceInfo.belongsTo(Device);

DeviceInfo.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { tableName: "deviceInfo", sequelize });

export default DeviceInfo;