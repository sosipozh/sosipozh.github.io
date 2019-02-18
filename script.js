$( document ).ready(function() {
    let name = window.location.href.split("#")[1];
    
    if (name === undefined || name == "") {
        $("#sosi").text("соси пожалуйста");
        document.title = "соси пожалуйста";
    } else {
        $("#sosi").text(decodeURI(name) + ", соси пожалуйста");
        document.title = decodeURI(name) + ", соси пожалуйста";
    }
});