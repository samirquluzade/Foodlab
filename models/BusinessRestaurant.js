module.exports = (sequelize,DataTypes) => {
    const Business_Restaurant = sequelize.define("Business_Restaurant",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            // is_nullable: 0
            allowNull: false
        },
        name:{
            type:DataTypes.STRING(255),
            // foreign key
            allowNull: false,
        },
        brand_name:{
            type:DataTypes.STRING(100),
            // foreign key
            allowNull: false
        },
        job_title:{
            type:DataTypes.ENUM("Owner","Manager"),
            // foreign key
            allowNull: false,
        },
        phone_number:{
            type:DataTypes.STRING(255),
            // foreign key
            allowNull: false,
        },
        property_details:{
            type:DataTypes.STRING(255),
            // foreign key
            allowNull: false,
        },
        email:{
            type:DataTypes.STRING(255),
            validate: {
                isEmail: true
            },
            // foreign key
            allowNull: false,
        },
        employee_count:{
            type:DataTypes.STRING(1024),
            // foreign key
            allowNull: false,
        },
        expansion_goal:{
            type:DataTypes.ENUM("city_centre","metro_stations","sea_side","xirdalan_masazir","xetai"),
            // foreign key
            allowNull: false,
        },
        type: {
            type:DataTypes.ENUM("restaurant","store"),
            allowNull: false
        }
    },{
        charset: 'utf8',
        timestamps: false,
        tableName: 'business_restaurant',
        collate: 'utf8_unicode_ci',
    });
    return Business_Restaurant;
}