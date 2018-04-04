chrome.browserAction.onClicked.addListener(function(tab) {
  var title = document.title;
  var URL = window.location.href;
  console.log(title);
  console.log(URL);
  console.log("666");
  chrome.browserAction.setBadgeText({text: '点击保存'});
  chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});
})
