import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "sequelize/types/sequelize";
import Brand from "./brand.model";
import TypeBrand from "./typeBrand.model";


class Type extends Model<InferAttributes<Type>,InferCreationAttributes<Type>> {
    id: ForeignKey<number>;
    name: String;
};

Type.belongsToMany(Brand, {through: TypeBrand});

Type.init({
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    }
},{tableName: "types",
 sequelize});

 export default Type;