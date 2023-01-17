import { DataTypes, Model } from "sequelize";
import sequelize from "sequelize/types/sequelize";
import Device from "./device.model.js";
import User from "./user.model.js";
class Rating extends Model {
}
;
Rating.belongsTo(User);
Rating.belongsTo(Device);
Rating.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { tableName: "Rating",
    sequelize });
export default Rating;
//# sourceMappingURL=rating.model.js.map