module.exports = (sequelize,DataTypes) => {
    const Restaurants = sequelize.define("Restaurants",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            // is_nullable: 0
            allowNull: false
        },
        restaurant_name:{
            type:DataTypes.STRING(255),
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
        comments:{
            type:DataTypes.STRING(1024),
            // foreign key
            allowNull: true,
        },
    },{
        charset: 'utf8',
        timestamps: false,
        tableName: 'restaurants',
        collate: 'utf8_unicode_ci',
    });
    return Restaurants;
}