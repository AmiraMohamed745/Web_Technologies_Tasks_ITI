
function searchForSubstring() {

    var userInput = document.getElementById("textarea").value;

    var substringToSearch = document.getElementById("substringtosearch").value;
    
    var indexToSearchFrom = Number(document.getElementById("indextosearchfrom").value);
    
    document.getElementById("firstoccurr").value = (userInput.indexOf(substringToSearch)).toString();

    document.getElementById("lastoccurr").value = (userInput.lastIndexOf(substringToSearch)).toString();
    
    document.getElementById("firstoccurrfromindex").value = (userInput.indexOf(substringToSearch, indexToSearchFrom)).toString();
    
    document.getElementById("lastoccurrfromindex").value = (userInput.lastIndexOf(substringToSearch, indexToSearchFrom)).toString();
}

document.getElementById("searchbtn").addEventListener("click", searchForSubstring);






