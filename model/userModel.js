const makeUserTable =(sequelize,DataTypes)=>{
    const User =sequelize.define('user',{
        username :{
            type: DataTypes.STRING,
            allowNull: false,

        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        image:{
            type:DataTypes.STRING,

        }

    })
    return User
}
module.exports = makeUserTable