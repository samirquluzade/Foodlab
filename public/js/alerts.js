const Swal = require("sweetalert2");
const errorAlert = (type, msg) => {
    Swal.fire({
        icon: type,
        title: "Xəta",
        text: msg,
    });
};

const successAlert = (type, msg) => {
    Swal.fire({
        position: "top-center",
        icon: type,
        title: msg,
        showConfirmButton: false,
        timer: 2500,
    });
};

const alerts = {errorAlert,successAlert};

module.exports = alerts;