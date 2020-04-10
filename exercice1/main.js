//Insert the main title
var mainTitle = document.getElementById("mainTitle");
mainTitle.innerHTML = "JavaScript";
//Insert the subtitle
var subTitle = document.getElementById("subTitle");
subTitle.innerHTML = "DOOM";

//Get all the contents elements and set a bleu background
var contents = document.getElementsByClassName("content");
// elem is iteraror and loops while elem is under lenght content
for (var elem = 0; elem < contents.length; elem++) {
  contents[elem].style.background = "red";
    // for all elem in lengt content change style 
}

//Function to delete article on click
function deleteContent() {
  var article = document.getElementsByTagName("article");
    /* get element name article
    and deletre the first elem name "article */
  article[0].style.display = "none";
}