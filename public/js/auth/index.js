import axios from "axios";
import {successAlert,errorAlert} from "../alerts.js";

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
        return res;
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
        const res = await axios.post(`http://127.0.0.1:${process.env.PORT}/users/logout`);
        return res;
    } catch (err) {
        errorAlert("error", "Hesabdan çıxarkən xəta baş verdi. Yenidən cəhd edin!");
    }
};
// export const deleteId = async (id,value) => {
//     try{
//         const res = await axios.post(`http://127.0.0.1:${process.env.PORT}/${id}`,{
//             value
//         });
//         return res;
//     }
//     catch (err) {
//         errorAlert("error", "Silinmədi. Yenidən cəhd edin!");
//     }
// }