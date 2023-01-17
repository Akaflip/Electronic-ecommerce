import { InferAttributes, InferCreationAttributes, Model, DataTypes, ForeignKey, } from "sequelize";
import sequelize from "sequelize/types/sequelize";
import BasketDevice from "./basketDevice.model.js";
import User from "./user.model.js";


class Basket extends Model<InferAttributes<Basket>, InferCreationAttributes<Basket>> {
    id: Number;
    user_Id: ForeignKey<number>
    
};

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