import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "sequelize/types/sequelize";
import Brand from "./brand.model.js";


class TypeBrand extends Model<InferAttributes<TypeBrand>,InferCreationAttributes<TypeBrand>> {
    id: Number;
};


TypeBrand.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
},{tableName: "TypeBrand",
 sequelize});

 export default TypeBrand;