import { DataTypes, Model } from "sequelize";
import sequelize from "sequelize/types/sequelize";
import Device from "./device.model";
class DeviceInfo extends Model {
}
;
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
//# sourceMappingURL=DeviceInfo.model.js.map