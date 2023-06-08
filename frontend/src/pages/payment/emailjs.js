import emailjs from "@emailjs/browser";

const sendMail = async (email,name) => {
    const templateParams = {
        email,name
    };

    emailjs.send("service_glq5rhd", "template_vp9jp29", templateParams,`-fuGVCT9nd0Ac9by5`).then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function (err) {
        console.log('FAILED...', err);
    }); 
}

export default sendMail