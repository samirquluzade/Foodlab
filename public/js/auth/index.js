import axios from "axios";
import {successAlert,errorAlert} from "../alerts.js";
import User from '../../../models/User.js';

export const signUp = async(username,password) => {
    try{
        const res = await axios.post(`http://127.0.0.1:${process.env.PORT}/users/signup`,{
            username,password
        });
        if(res.data.success === "success"){
            successAlert("success","Uğurla qeydiyyatdan keçdiniz");
            window.setTimeout(() => {
                location.assign("/");
            },1500);
        }
    }
    catch (err){
        errorAlert("error","Xəta baş verdi.Yenidən cəhd edin");
    }
}
export const login = async(username,password) => {
    try{
        const res = await axios.post(`http://127.0.0.1:${process.env.PORT}/users/login`,{
            username,password
        });
        if(res.data.success === "success"){
            successAlert("success","Uğurla daxil olundu");
            window.setTimeout(() => {
                location.assign("/");
            },1500);
        }
    }
    catch (err){
        errorAlert("error","İstifadəçi adı və ya şifrə səhvdir.Yenidən cəhd edin!");
        window.setTimeout(() => {
            location.assign("/login");
        }, 1500);
    }
}
export const logout = async () => {
    try {
        const res = await axios.get(`http://127.0.0.1:${process.env.PORT}/users/logout`);
        if (res.data.status === "success") {
            successAlert("success", "Uğurla hesabdan çıxıldı!");
            window.setTimeout(() => {
                location.assign("/");
            }, 1500);
        }
    } catch (err) {
        errorAlert("error", "Hesabdan çıxarkən xəta baş verdi. Yenidən cəhd edin!");
    }
};