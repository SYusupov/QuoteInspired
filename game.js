function change(id){
    var xmlhttp = new XMLHttpRequest();//getting data from XML
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            retrieveData(this, id);

        }
    }
    xmlhttp.open("GET", "http://web.sfc.keio.ac.jp/~t17600sy/FIT2/MiniProject/descrdata.xml", true);
    xmlhttp.send();
}

window.addEventListener('devicelight', function(event) {
var bodyBg= document.body.style;
//event.value is the lux value returned by the sensor on the device
if (event.value < 30) {
document.getElementsByTagName("html")[0].id="html1"
} else {
    document.getElementsByTagName("html")[0].id="html2"
}

});

var num_q = 0; //iteration for number of games
var UsedQuotes = [1];
var CorrectAnswers = [];
var WrongAnswers = [];
function retrieveData(xml,id){
    clearScreen();
    if(document.getElementById("infoArea")!=null){
    element = document.getElementById("infoArea");
    element.parentNode.removeChild(element);}

    var options = [];
        var xmlDoc = xml.responseXML;
        var data = xmlDoc.getElementsByTagName('QUOTE');
        if(num_q < 10){
            if(id!='no_id'){
                if(document.getElementById(id).innerHTML==getAuthor(random_order1)){
                    CorrectAnswers.push(random_order1);
                }
                else {
                    WrongAnswers.push(random_order1);
                }}
        var randomGenerator = function(){return Math.floor(Math.random()*(data.length-1))};
        getAuthor = function(index){return data[index].getElementsByTagName('AUTHOR')[0].childNodes[0].nodeValue;}
        getQuote =  function(index){return data[index].getElementsByTagName('TEXT')[0].childNodes[0].nodeValue;}
        getImage = function(index){return data[index].getElementsByTagName('IMAGE')[0].childNodes[0].nodeValue;}
		getInfo = function(index){return data[index].getElementsByTagName('INFO')[0].childNodes[0].nodeValue;}
        random_order1 = 0;
        while(UsedQuotes.indexOf(random_order1)>-1) //checks if the randomized order of the quote was already shown
            random_order1 = randomGenerator();
        UsedQuotes.push(random_order1);
        authorName1 = getAuthor(random_order1);
        var Quote = getQuote(random_order1);
        options.push(random_order1);

        indices = [random_order1];
        random_order2 = random_order1, random_order3 = random_order1, random_order4 = random_order1;

        while(indices.indexOf(random_order2) > -1)
            random_order2 = randomGenerator();
        indices.push(random_order2);
        options.push(random_order2);

        while(indices.indexOf(random_order3) > -1)
            random_order3 = randomGenerator();
        indices.push(random_order3);
        options.push(random_order3);


        while(indices.indexOf(random_order4) > -1)
            random_order4 = randomGenerator();
        indices.push(random_order4);
        options.push(random_order4);

        document.getElementById("quote").innerHTML = "";
        document.getElementById("option1").value="";
        document.getElementById("option2").value="";
        document.getElementById("option3").value="";
        document.getElementById("option4").value="";

        var quotes_text = document.createElement("p");
        var qtext = document.createTextNode(Quote);
        quotes_text.appendChild(qtext);
        var dq = document.getElementById("quote");
        dq.appendChild(quotes_text);


        options = shuffle(options); //random options

        //inputting picture
        for(var ni=0;ni<4;ni++){
        var img = document.createElement("IMG");
        img.setAttribute("src", getImage(options[ni]));
        img.setAttribute("height", "220rem");
        img.setAttribute("alt", getAuthor(options[ni]));
        img.classList.add("imgGame");
        name = "img"+(ni+1);
        window[name].appendChild(img);
        }

        var textArea = document.createElement("p");
        var text = document.createTextNode("Drag your mouse over an image to view more about the person");
        textArea.appendChild(text);
        textArea.id="textArea";
        var div = document.createElement("div");
        div.classList.add("info");
        div.appendChild(textArea);
        div.id="infoArea2"
        var td = document.createElement("td");
        td.id="infoArea"
        td.appendChild(div);
        var tr = document.getElementById("infoSection");
        tr.appendChild(td);

        document.getElementById("img3").onmouseover = function(){
            textArea.innerHTML="";
            var display = getInfo(options[2]);
            var text = document.createTextNode(display);
            textArea.appendChild(text);
            textArea.id="textArea";
        }
        document.getElementById("img2").onmouseover = function(){
            textArea.innerHTML="";
            var display = getInfo(options[1]);
            var text = document.createTextNode(display);
            textArea.appendChild(text);
            textArea.id="textArea";
        }
        document.getElementById("img1").onmouseover = function(){
            textArea.innerHTML="";
            var display = getInfo(options[0]);
            var text = document.createTextNode(display);
            textArea.appendChild(text);
            textArea.id="textArea";
        }
        document.getElementById("img4").onmouseover = function(){
            textArea.innerHTML="";
            var display = getInfo(options[3]);
            var text = document.createTextNode(display);
            textArea.appendChild(text);
            textArea.id="textArea";
        }

        // document.getElementById("img3").ondblclick = function(){
        //     var td = document.getElementById("infoArea")
        //     td.parentNode.removeChild(td);
        // }

        document.getElementById("option1").innerHTML=getAuthor(options[0]);
        document.getElementById("option2").innerHTML=getAuthor(options[1]);
        document.getElementById("option3").innerHTML=getAuthor(options[2]);
        document.getElementById("option4").innerHTML=getAuthor(options[3]);

        // var author_text = document.createElement("p");
        // var atext = document.createTextNode(authorName1);
        // author_text.appendChild(atext);
        // var da = document.getElementById("img1");
        // da.appendChild(author_text);
        num_q+=1;
    }
    else{
            if(document.getElementById(id).innerHTML==authorName1){
                CorrectAnswers.push(random_order1);
            }
            else {
                WrongAnswers.push(random_order1);
            }
        clearScreen();
        document.getElementById("button1").innerHTML = "";
        document.getElementById("button2").innerHTML = "";
        document.getElementById("button3").innerHTML = "";
        document.getElementById("button4").innerHTML = "";
        document.getElementById("option1")
        document.getElementById("button").innerHTML = "";
        document.getElementById("quote").innerHTML = "";
        text_area=document.getElementById("quote");
        text = document.createElement("p");
        string = document.createTextNode("\nNumber of Wrong Answers: " + WrongAnswers.length);
        text.classList.add("text_area");
        text_area.appendChild(text);
        text.appendChild(string);
        text = document.createElement("p");
        string = document.createTextNode("Number of Correct Answers: " + CorrectAnswers.length);
        text.appendChild(string);
        text_area.appendChild(text);
        text.classList.add("text_area");
        document.getElementById("button").innerHTML = "";
        var btn_right = document.createElement("button");
        var string = document.createTextNode("See Right Answers");
        btn_right.appendChild(string);
        btn_right.setAttribute("bottom", "0");
        btn_right.setAttribute("position", "fixed");
        btn_right.classList.add("mainb");
        btn_right.id = "main2";
        document.getElementById("button").appendChild(btn_right);
        var num=0;
        var num2=1;
        btn_right.onclick = function(){
            btn_right.innerHTML = "Next Right Answer"
            if(num<CorrectAnswers.length){
                clearScreen();
                document.getElementById("button1").innerHTML = "";
                document.getElementById("button2").innerHTML = "";
                document.getElementById("button3").innerHTML = "";
                document.getElementById("button4").innerHTML = "";
                var text = document.createElement("h2");
                var string = document.createTextNode("Right Answer!");
                text.appendChild(string);
                text.classList.add("text_area");
                var text2 = document.createElement("h3");
                var string = document.createTextNode(getQuote(num));
                text2.appendChild(string);
                text2.classList.add("text_area");
                var text3 = document.createElement("h4");
                var string = document.createTextNode(getAuthor(num));
                text3.classList.add("text_area");
                text3.appendChild(string);
                var element = document.getElementById("quote");
                if(typeof(element) != "undefined" && element != null){
                element.parentNode.removeChild(element);} //remove quote area
                document.getElementById("img1").appendChild(text);
                document.getElementById("img1").appendChild(text2);
                document.getElementById("img4").appendChild(text3);

                var img = document.createElement("IMG");
                img.setAttribute("src", getImage(num));
                img.setAttribute("height", "200");
                img.setAttribute("alt", getAuthor(num));
                img3.appendChild(img);
                img.classList.add("imgGame");
                num++;
            }
            else{
                clearScreen();
                document.getElementById("button1").innerHTML = "";
                document.getElementById("button2").innerHTML = "";
                document.getElementById("button3").innerHTML = "";
                document.getElementById("button4").innerHTML = "";
            }
        };
        var btn_wrong = document.createElement("button");
        var string = document.createTextNode("Review Wrong Answers");
        btn_wrong.appendChild(string);
        btn_wrong.classList.add("mainb");
        document.getElementById("button").appendChild(btn_wrong);

        btn_wrong.onclick = function(){
            btn_wrong.innerHTML = "Next Wrong Answer"
            if(num2<WrongAnswers.length){
                clearScreen();
                document.getElementById("button1").innerHTML = "";
                document.getElementById("button2").innerHTML = "";
                document.getElementById("button3").innerHTML = "";
                document.getElementById("button4").innerHTML = "";
                var text = document.createElement("p");
                var string = document.createTextNode("You need to revise this quote!");
                text.appendChild(string);
                text.classList.add("text_area1");
                var text2 = document.createElement("p");
                var string = document.createTextNode(getQuote(num2));
                text2.appendChild(string);
                text2.classList.add("text_area");
                var text3 = document.createElement("p");
                var string = document.createTextNode(getAuthor(num2));
                text3.appendChild(string);
                text3.classList.add("text_area");

                var element = document.getElementById("quote");
                if(typeof(element) != 'undefined' && element != null){
                    element.parentNode.removeChild(element);} //remove quote area

                document.getElementById("img1").appendChild(text);
                document.getElementById("img3").appendChild(text2);
                document.getElementById("img4").appendChild(text3);

                var img = document.createElement("IMG");
                img.setAttribute("src", getImage(num2));
                // img.setAttribute("height", "200");
                img.setAttribute("alt", getAuthor(num2));
                img3.appendChild(img);
                img.classList.add("imgGame");
                num2++;
            }
            else{
                clearScreen();
            }
    }

}

function clearScreen(){
    document.getElementById("img3").innerHTML = "";
    document.getElementById("img2").innerHTML = "";
    document.getElementById("img1").innerHTML = "";
    document.getElementById("img4").innerHTML = "";
}

function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
  return array;
}}
