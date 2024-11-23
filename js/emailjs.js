function sendMail(){
    (function(){
        emailjs.init("_2bfOzNY3BpkZAVri")
    })();

    let params = {
        from_name : document.querySelector("#from_name").value,
        from_email : document.querySelector("#from_email").value,
        message : document.querySelector("#message").value
    };

    let serviceID = "service_va9yysp";
    let templateID = "template_9322x2d";

    emailjs.send(serviceID,templateID,params)
    .then( res => {
        alert("Email berhasil dikirim");
    }).catch();
}

console.log( document.querySelector("#message"))