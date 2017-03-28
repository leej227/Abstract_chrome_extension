var myImgs = [
  "1.png",
  "2.png",
  "3.png",
  "rainbow.png"
];

var images = document.getElementsByTagName('img');

for (var i = 0, l = images.length; i < l; i++) {
  var num = Math.floor(Math.random() * myImgs.length);
  images[i].src = chrome.extension.getURL(myImgs[num]);
}
