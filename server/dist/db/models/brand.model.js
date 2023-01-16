import { DataTypes, Model } from "sequelize";
import sequelize from "sequelize/types/sequelize";
import Type from "./type.model";
import TypeBrand from "./typeBrand.model";
class Brand extends Model {
}
;
Brand.belongsToMany(Type, { through: TypeBrand });
Brand.init({
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    }
}, { tableName: "brands",
    sequelize });
export default Brand;
//# sourceMappingURL=brand.model.js.map