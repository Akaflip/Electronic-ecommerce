import { Model, DataTypes, } from "sequelize";
import sequelize from "sequelize/types/sequelize";
import Basket from "./basket.model";
import Rating from "./rating.model";
class User extends Model {
}
;
User.hasOne(Basket);
User.hasMany(Rating);
User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { tableName: 'Users',
    sequelize });
export default User;
//# sourceMappingURL=user.model.js.map