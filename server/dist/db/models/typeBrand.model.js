import { DataTypes, Model } from "sequelize";
import sequelize from "sequelize/types/sequelize";
class TypeBrand extends Model {
}
;
TypeBrand.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
}, { tableName: "TypeBrand",
    sequelize });
export default TypeBrand;
//# sourceMappingURL=typeBrand.model.js.map