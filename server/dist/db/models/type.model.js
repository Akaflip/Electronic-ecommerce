import { DataTypes, Model } from "sequelize";
import sequelize from "sequelize/types/sequelize";
import Brand from "./brand.model.js";
import TypeBrand from "./typeBrand.model.js";
class Type extends Model {
}
;
Type.belongsToMany(Brand, { through: TypeBrand });
Type.init({
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    }
}, { tableName: "types",
    sequelize });
export default Type;
//# sourceMappingURL=type.model.js.map