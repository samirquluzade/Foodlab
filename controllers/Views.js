const catchAsync = require("../utils/catchAsync.js");
const db = require("../models");
const sendMail = require("../utils/email.js");

const getHome = catchAsync(async(req,res,next) => {
    return res.status(200).render("_home",{
        title: "Home"
    });
});

const getSolutions = catchAsync(async(req,res,next) => {
    return res.status(200).render("_solutions",{
        title: "Solutions"
    });
});
const getAbout = catchAsync(async(req,res,next) => {
    return res.status(200).render("_about",{
        title: "About"
    });
});
const getEnrollKitchen = catchAsync(async(req,res,next) => {
    return res.status(200).render("_enrollKitchen",{
        title: "Enroll Kitchen"
    });
});
const getProperty = catchAsync(async(req,res,next) => {
    return res.status(200).render("_property",{
        title: "Property"
    });
});
const getRestaurant = catchAsync(async(req,res,next) => {
    return res.status(200).render("_restaurant",{
        title: "Restaurant"
    });
});
const getStore = catchAsync(async(req,res,next) => {
    return res.status(200).render("_store",{
        title: "Store"
    });
});
const addRestaurantComment = catchAsync(async(req,res,next) => {
    const {restaurant_name,email,phone_number,comments} = req.body;
    if (!restaurant_name || !email || !phone_number) {
        return res.status(400).json({
            error: 'Please provide restaurant_name,email and phone_number'
        })
    }
    const data = (await db.Restaurants.create({
        restaurant_name,
        email,
        phone_number,
        comments
    })).get({plain: true});
    if(data){
        let message = {
            from: process.env.MAIL_FROM,
            to: 'smrquluzade@gmail.com',
            subject: `Restaurant comment`,
            text: `
                Restaurant name: ${restaurant_name} \n
                Email: ${email} \n
                Phone number: ${phone_number} \n
                Comments: ${comments}
            `
        }
        const response = await sendMail(message);
        if(response.rejected.length === 0){
            return res.status(201).json({
                success: true
            })
        }
        else{
            await db.Restaurants.destroy({
                where: {
                    id: data.id
                }
            });
            return res.status(400).json({
                success: false
            })
        }
    }
    else{
        return res.status(400).json({
            success: false
        })
    }
});
const addPropertyComment = catchAsync(async(req,res,next) => {
    const {name,email,phone_number,property_address,property_details,metro_station,footage} = req.body;
    if (!name || !email || !phone_number || !property_address || !property_details || !footage || !metro_station) {
        return res.status(400).json({
            error: 'Please provide name,email,phone_number,property address,property details,metro_station and footage'
        })
    }
    const data = (await db.Property.create({
        name,
        email,
        phone_number,
        property_address,
        property_details,
        metro_station,
        footage
    })).get({plain: true});
    if(data){
        let message = {
            from: process.env.MAIL_FROM,
            to: 'smrquluzade@gmail.com',
            subject: `Property Comment`,
            text: `
                Name: ${name} \n
                Email: ${email} \n
                Phone number: ${phone_number} \n
                Property address: ${property_address} \n
                Property details: ${property_details} \n
                Metro station: ${metro_station} \n
                Footage: ${footage}
            `
        }
        const response = await sendMail(message);
        if(response.rejected.length === 0){
            return res.status(201).json({
                success: true
            })
        }
        else{
            await db.Property.destroy({
                where: {
                    id: data.id
                }
            });
            return res.status(400).json({
                success: false
            })
        }
    }
    else{
        return res.status(400).json({
            success: false
        })
    }
});
const addEnrollKitchen = catchAsync(async(req,res,next) => {
    const {brand_name,email,address,phone_number,kitchen_type,food} = req.body;
    if (!brand_name || !email || !phone_number || !address || !kitchen_type || !food) {
        return res.status(400).json({
            error: 'Please provide name,email,phone_number,property address,property details and footage'
        })
    }
    const data = (await db.Kitchen.create({
        brand_name,
        email,
        phone_number,
        address,
        kitchen_type,
        food
    })).get({plain: true});
    if(data){
        let message = {
            from: process.env.MAIL_FROM,
            to: 'smrquluzade@gmail.com',
            subject: `Kitchen Comment`,
            text: `
                Name: ${brand_name} \n
                Email: ${email} \n
                Phone number: ${phone_number} \n
                Property address: ${address} \n
                Property details: ${kitchen_type} \n
                Footage: ${food}
            `
        }
        const response = await sendMail(message);
        if(response.rejected.length === 0){
            return res.status(201).json({
                success: true
            })
        }
        else{
            await db.Kitchen.destroy({
                where: {
                    id: data.id
                }
            });
            return res.status(400).json({
                success: false
            })
        }
    }
    else{
        return res.status(400).json({
            success: false
        })
    }
});
const addBusinessComment = catchAsync(async(req,res,next) => {
    const {name,brand_name,job_title,email,phone_number,property_details,employee_count,expansion_goal,type} = req.body;
    if (!name || !brand_name || !job_title || !email || !phone_number || !property_details || !employee_count || !expansion_goal || !type) {
        return res.status(400).json({
            error: 'Please provide name,brand_name,job_title,email,phone_number,property details,employee count and expansion goal'
        })
    }
        const data = (await db.Business_Restaurant.create({
            name,
            brand_name,
            job_title,
            email,
            phone_number,
            property_details,
            employee_count,
            expansion_goal,
            type
        })).get({plain: true});
        if(data){
            let message = {
                from: process.env.MAIL_FROM,
                to: 'smrquluzade@gmail.com',
                subject: type === "restaurant" ? `Business Restaurant Comment`: "Business Store Comment",
                text: `
                Name: ${name} \n
                Brand name: ${brand_name} \n
                Job title: ${job_title} \n
                Email: ${email} \n
                Phone number: ${phone_number} \n
                Property details: ${property_details} \n
                Employee count: ${employee_count} \n
                Expansion Goal: ${expansion_goal} \n
            `
            }
            const response = await sendMail(message);
            if(response.rejected.length === 0){
                return res.status(201).json({
                    success: true
                })
            }
            else{
                await db.Business_Restaurant.destroy({
                    where: {
                        id: data.id
                    }
                });
                return res.status(400).json({
                    success: false
                })
            }
        }
        else{
            return res.status(400).json({
                success: false
            })
        }
});
module.exports = {getHome,getSolutions,getRestaurant,getAbout,getStore,getProperty,addRestaurantComment,getEnrollKitchen,addPropertyComment,addEnrollKitchen,addBusinessComment};

