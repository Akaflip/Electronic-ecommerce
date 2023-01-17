import { Model, DataTypes, } from "sequelize";
import sequelize from "sequelize/types/sequelize";
import Basket from "./basket.model.js";
import Device from "./device.model.js";
class BasketDevice extends Model {
}
;
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
//# sourceMappingURL=basketDevice.model.js.map