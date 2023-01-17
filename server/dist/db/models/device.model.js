import { Model, DataTypes, } from "sequelize";
import sequelize from "sequelize/types/sequelize";
import BasketDevice from "./basketDevice.model.js";
import DeviceInfo from "./DeviceInfo.model.js";
import Rating from "./rating.model.js";
class Device extends Model {
}
;
Device.hasMany(BasketDevice);
Device.hasMany(DeviceInfo, { as: "info" });
Device.hasMany(Rating);
Device.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    Img: {
        type: DataTypes.CHAR(100),
        allowNull: false
    }
}, { tableName: 'Devices',
    sequelize });
export default Device;
//# sourceMappingURL=device.model.js.map