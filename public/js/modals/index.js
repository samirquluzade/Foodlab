const axios = require('axios');
const {successAlert,errorAlert} = require('../alerts.js');
// const db = require('../../../models');

export const modalOperations = async data => {
    let op = {
        restaurant_name: data.get('restaurant_name'),
        email: data.get('email'),
        phone_number: data.get('phone_number'),
        comments: data.get('comments')
    };
    try{
        const res = await axios.post(`http://45.9.191.49:3999/add_restaurant_comment`,{
            ...op,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res;
    }
    catch (err){
        return {
            success: false,
            error: err
        }
    }
}
export const propertyOperations = async data => {
    let op = {
        name: data.get('name'),
        email: data.get('email'),
        phone_number: data.get('phone_number'),
        property_address: data.get('property_address'),
        property_details: data.get('property_details'),
        metro_station: data.get('metro_station'),
        footage: data.get('footage')
    };
    try{
        const res = await axios.post(`http://45.9.191.49:3999/add_property_comment`,{
            ...op,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res;
    }
    catch (err){
        return {
            success: false,
            error: err
        }
    }
}
export const kitchenOperations = async data => {
    let op = {
        brand_name: data.get('brand_name'),
        address: data.get('address'),
        email: data.get('email'),
        phone_number: data.get('phone_number'),
        kitchen_type: data.get('kitchen_type'),
        food: data.get('food')
    };
    try{
        const res = await axios.post(`http://45.9.191.49:3999/add_kitchen_comment`,{
            ...op,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res;
    }
    catch (err){
        return {
            success: false,
            error: err
        }
    }
}
export const businessOperations = async data => {
    let op = {
        name: data.get('name'),
        brand_name: data.get('brand_name'),
        job_title: data.get('job_title'),
        property_details: data.get('property_details'),
        email: data.get('email'),
        phone_number: data.get('phone_number'),
        employee_count: data.get('employee_count'),
        expansion_goal: data.get('expansion_goal'),
        type: data.get('type')
    };
    try{
        const res = await axios.post(`http://45.9.191.49:3999/add_business_comment`,{
            ...op,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res;
    }
    catch (err){
        return {
            success: false,
            error: err
        }
    }
}
export const solutionsOperations = async data => {
    let op = {
        name: data.get('name'),
        brand_name: data.get('brand_name'),
        brand_number: data.get('brand_number'),
        email: data.get('email'),
        phone_number: data.get('phone_number'),
        method: data.get('method'),
        pay_method: data.get('pay_method'),
        comment: data.get('solutions_comment'),
    };
    try{
        const res = await axios.post(`http://45.9.191.49:3999/add_solutions_comment`,{
            ...op,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res;
    }
    catch (err){
        return {
            success: false,
            error: err
        }
    }
}
