window.addEventListener('devicelight', function(event) {
var bodyBg= document.body.style;
//event.value is the lux value returned by the sensor on the device
if (event.value < 100) {
document.getElementsByTagName("html")[0].id="html1"
} else {
    document.getElementsByTagName("html")[0].id="html2"
}

});
function nextQuote(){
    var xmlhttp = new XMLHttpRequest();//getting data from XML
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            retrieveData(this);

        }
    }
    xmlhttp.open("GET", "http://web.sfc.keio.ac.jp/~t17600sy/FIT2/MiniProject/database.xml", true);
    xmlhttp.send();
}
var UsedQuotes = [0];
var revcount = 0;
function retrieveData(xml){
        clearScreen();
        var xmlDoc = xml.responseXML;
        console.log(xmlDoc);
        data = xmlDoc.getElementsByTagName('QUOTE');
        console.log(data);
        var random_order=0;
        var randomGenerator = function(){return Math.floor(Math.random()*(data.length-1))};
        getAuthor = function(index){return data[index].getElementsByTagName('AUTHOR')[0].childNodes[0].nodeValue;}
        getQuote =  function(index){return data[index].getElementsByTagName('TEXT')[0].childNodes[0].nodeValue;}
        getImage = function(index){return data[index].getElementsByTagName('IMAGE')[0].childNodes[0].nodeValue;}

        if(revcount<data.length-2){
            while(UsedQuotes.indexOf(random_order)>-1) //checks if the randomized order of the quote was already shown
                random_order = randomGenerator();

            var textArea = document.createElement("p");
            var text = document.createTextNode(getQuote(random_order));
            var htmlObject = document.getElementById("quote");
            textArea.appendChild(text);
            htmlObject.appendChild(textArea);

            var image = document.createElement("img");
            image.setAttribute("src", getImage(random_order));
            image.setAttribute("height", "250rem");
            image.setAttribute("alt", getAuthor(random_order));
            var htmlObject = document.getElementById("image_area");
            htmlObject.appendChild(image);

            var textArea = document.createElement("p");
            var text = document.createTextNode(getAuthor(random_order));
            textArea.appendChild(text);
            var htmlObject = document.getElementById("text_area");
            htmlObject.appendChild(textArea);

            UsedQuotes.push(random_order);
            revcount++;
            console.log(revcount);
    }
    else{
        clearScreen();
        element = document.getElementById("quote")
        element.parentNode.removeChild(element);
        var textArea = document.createElement("p");
        var text = document.createTextNode("All the quotes are revised!");
        var htmlObject = document.getElementById("image_area");
        textArea.appendChild(text);
        textArea.classList.add("text_small");
        htmlObject.appendChild(textArea);
        document.getElementById("main_b").innerHTML = "Start playing"
        document.getElementById("main_b").onclick = function(){location.href = 'http://web.sfc.keio.ac.jp/~t17600sy/FIT2/MiniProject/game.html';}
    }
}

function clearScreen(){
    document.getElementById("quote").innerHTML = "";
    document.getElementById("image_area").innerHTML = "";
    document.getElementById("text_area").innerHTML = "";
}
