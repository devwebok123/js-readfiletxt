function getContent() {  
  var xmlhttp;

  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
      var lines = xmlhttp.responseText; //*here we get all lines from text file*

      displayContent(lines);
    }
  };

  xmlhttp.open("GET", "Random_content_specifications.txt", true);
  xmlhttp.send();
}
function displayContent (lines) {   
   var ranNum = Math.floor(Math.random() * 4);
   var lineArr = lines.split('<img'); 
   if (ranNum == 0) ranNum ++;  
   document.getElementById("content").innerHTML = "<img " + lineArr[ranNum];         
  
}
getContent();
