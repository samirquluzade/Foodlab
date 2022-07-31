module.exports = (sequelize,DataTypes) => {
    const Solutions = sequelize.define("Solutions",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            // is_nullable: 0
            allowNull: false
        },
        brand_name:{
            type:DataTypes.STRING(100),
            // foreign key
            allowNull: false,
        },
        email:{
            type:DataTypes.STRING(100),
            validate: {
                isEmail: true
            },
            // foreign key
            allowNull: false
        },
        phone_number:{
            type:DataTypes.STRING(100),
            // foreign key
            allowNull: false,
        },
        hotel_name:{
            type:DataTypes.STRING(255),
            // foreign key
            allowNull: false,
        },
        name:{
            type:DataTypes.STRING(255),
            // foreign key
            allowNull: false,
        },
        comment:{
            type:DataTypes.STRING(255),
            // foreign key
            allowNull: false,
        },
    },{
        charset: 'utf8',
        timestamps: false,
        tableName: 'solutions',
        collate: 'utf8_unicode_ci',
    });
    return Solutions;
}