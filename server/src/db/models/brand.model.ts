import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "sequelize/types/sequelize";
import Type from "./type.model";
import TypeBrand from "./typeBrand.model";


class Brand extends Model<InferAttributes<Brand>,InferCreationAttributes<Brand>> {
    id: ForeignKey<number>;
    name: String;
};

Brand.belongsToMany(Type, {through: TypeBrand});

Brand.init({
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    }
},{tableName: "brands",
 sequelize});

 export default Brand;