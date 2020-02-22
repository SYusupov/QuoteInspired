window.addEventListener('devicelight', function(event) {
//event.value is the lux value returned by the sensor on the device
if (event.value < 100) {
document.getElementsByTagName("html")[0].id="html1"
} else {
    document.getElementsByTagName("html")[0].id="html2"
}

});
