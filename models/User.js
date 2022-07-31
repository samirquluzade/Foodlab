module.exports = (sequelize,DataTypes) => {
    const crypto = require("crypto");
    const bcrypt = require("bcryptjs");
    const User = sequelize.define("User",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            // is_nullable: 0
            allowNull: false
        },
        username:{
            type:DataTypes.STRING(100),
            // foreign key
            allowNull: false,
        },
        password:{
            type:DataTypes.STRING(150),
            // foreign key
            allowNull: false
        },
    },{
        charset: 'utf8',
        timestamps: false,
        tableName: 'user',
        collate: 'utf8_unicode_ci',
    });
    User.prototype.validPassword = async(password,hash) => {
        return await bcrypt.compareSync(password,hash);
    }
    User.prototype.correctPassword = async(candidatePassword,userPassword) => {
        return await bcrypt.compare(candidatePassword,userPassword);
    }
    return User;
}