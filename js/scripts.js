var pagesElements = document.getElementsByClassName ('button'),
    n = pagesElements.length;

console.log(pagesElements);

for (var i =0 ; i < n ; i++) {
    var text = pagesElements[i].innerHTML;
    console.log('Button text:' + text);
}
