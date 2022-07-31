module.exports = (sequelize,DataTypes) => {
    const Kitchen = sequelize.define("Kitchen",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            // is_nullable: 0
            allowNull: false
        },
        brand_name:{
            type:DataTypes.STRING(50),
            // foreign key
            allowNull: false,
        },
        address:{
            type:DataTypes.STRING(100),
            // foreign key
            allowNull: false,
        },
        phone_number:{
            type:DataTypes.STRING(100),
            // foreign key
            allowNull: false,
        },
        email:{
            type:DataTypes.STRING(100),
            // foreign key
            validate: {
                isEmail: true
            },
            // foreign key
            allowNull: false
        },
        kitchen_type:{
            type:DataTypes.ENUM('catering_company','food_truck','hotel','ghost_kitchen','pub/bar','restaurants','home','other'),
            // foreign key
            allowNull: false,
        },
        food:{
            type:DataTypes.ENUM('Doner&Shaurma','Turkish','Burger','Pizza&Lahmacun','Sushi, Sea food','Healthy,Salad','Chicken','Fast_Food','Dessert','Mexican/Middle East','Breakfast/Lunch','Asian,Chinese'),
            // foreign key
            allowNull: false,
        }
    },{
        charset: 'utf8',
        timestamps: false,
        tableName: 'enroll_kitchen',
        collate: 'utf8_unicode_ci',
    });
    return Kitchen;
}