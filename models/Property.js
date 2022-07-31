module.exports = (sequelize,DataTypes) => {
    const Property = sequelize.define("Property",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            // is_nullable: 0
            allowNull: false
        },
        name:{
            type:DataTypes.STRING(50),
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
        property_address:{
            type:DataTypes.STRING(100),
            // foreign key
            allowNull: false,
        },
        property_details:{
            type:DataTypes.STRING(100),
            // foreign key
            allowNull: false,
        },
        metro_station: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        footage:{
            type:DataTypes.STRING(1024),
            // foreign key
            allowNull: false,
        },
    },{
        charset: 'utf8',
        timestamps: false,
        tableName: 'property',
        collate: 'utf8_unicode_ci',
    });
    return Property;
}