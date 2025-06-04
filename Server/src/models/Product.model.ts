//aqui esta la tabla para products
import { Table, Column, Model, DataType } from "sequelize-typescript";
@Table({
  tableName: "Product",
  timestamps: true,
  underscored: true,
})
class Product extends Model {
  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.DECIMAL(5, 2),
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  available: boolean;
}
export default Product;