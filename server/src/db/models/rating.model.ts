import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "sequelize/types/sequelize";
import Device from "./device.model";
import User from "./user.model";


class Rating extends Model<InferAttributes<Rating>,InferCreationAttributes<Rating>> {
    id: Number;
    userId: ForeignKey<number>;
    deviceId: ForeignKey<number>;
    rate: Number;
};

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
},
{ tableName: "Rating", 
sequelize });

export default Rating;