$( document ).ready(function() {
    let name = window.location.href.split("#")[1];
    
    if (name === undefined || name == "") {
        $("#sositext").text("соси пожалуйста");
        document.title = "соси пожалуйста";
    } else {
        $("#sositext").text(decodeURI(name) + ", соси пожалуйста");
        document.title = decodeURI(name) + ", соси пожалуйста";
    }
});