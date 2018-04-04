document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickHandler);
  main();
});

function clickHandler(element) {
/*  var title = document.title;
  var URL = window.location.href;
  console.log(title);
  console.log(URL);
  console.log("666");*/
    // On click Code
    chrome.tabs.getSelected(null,function(tab) {
      var tablink = tab.url;
      console.log(tablink);
      console.log(tab.title);
  });

  /*  chrome.tabs.onActiveChanged.addListener(function(tabId,selectInfo){
      alert("fooooooo");
});*/
}

function main() {

    // Initialization work goes here.
}
