import { Model, DataTypes, } from "sequelize";
import sequelize from "sequelize/types/sequelize";
import BasketDevice from "./basketDevice.model";
import User from "./user.model";
class Basket extends Model {
}
;
Basket.hasMany(BasketDevice);
Basket.belongsTo(User);
Basket.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
}, { tableName: 'Basket',
    sequelize });
export default Basket;
//# sourceMappingURL=basket.model.js.map