window.addEventListener('devicelight', function(event) {
var bodyBg= document.body.style;
//event.value is the lux value returned by the sensor on the device
if (event.value < 100) {
document.getElementsByTagName("html")[0].id="html1"
} else {
    document.getElementsByTagName("html")[0].id="html2"
}

});
function show_detail(){
    container = document.getElementById("detail");
    text = document.createElement("h1");
    string = document.createTextNode("Let's check your knowledge of greatest sayings!");
    text.appendChild(string);
    string = document.createElement("br");
    text.appendChild(string);
    string = document.createTextNode("Pick the person whose quote, you think, is shown.");
    text.appendChild(string);
    string = document.createElement("br");
    text.appendChild(string);
    string = document.createTextNode("You will absolutely get significant dose of inspiration!");
    text.appendChild(string);
    string = document.createElement("br");
    text.setAttribute("text-align", "center");
    text.classList.add("text_small");
    text.appendChild(string);
    container.appendChild(text);
    new_btn = document.createElement("button");
    new_btn.innerHTML = "Hide Details";
    new_btn.classList.add("mainb_small")
    document.getElementById("detail").appendChild(new_btn);
    new_btn.onclick = function(){
    document.getElementById("detail").innerHTML = "";
}
}
