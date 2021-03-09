
import { Sequelize,Model,DataTypes } from 'sequelize'
export const sequelize = new Sequelize('sqlite::memory:')



export class User extends Model {}
User.init({
    
    username: {
        type: DataTypes.STRING,
        unique:true, //ข้อมูลจาก username จะไม่มีวันซ้ำ 
        allowNull: false, //ข้อมูลที่ใส่จำเป็นต้องมีการใส
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    firstname: { 
        type: DataTypes.STRING,
        allowNull:false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    balance: {
        type: DataTypes.NUMBER,
        allowNull:false,
    }

},{sequelize , modelName: 'user'})