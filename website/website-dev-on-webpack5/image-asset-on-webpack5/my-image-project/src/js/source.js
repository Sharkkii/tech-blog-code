function createTextElement(text) {
  const textElement = document.createElement("p");
  textElement.textContent = text;
  return textElement;
}

function createPngImgElement() {
  const pngImage = require("../assets/images/favicon-js.png");
  const pngImgElement = document.createElement("img");
  pngImgElement.setAttribute("src", pngImage);
  pngImgElement.width = 100;
  pngImgElement.height = 100;
  return pngImgElement;
}

function createJpegImgElement() {
  const jpegImage = require("../assets/images/favicon-js.jpg");
  const jpegImgElement = document.createElement("img");
  jpegImgElement.setAttribute("src", jpegImage);
  jpegImgElement.width = 100;
  jpegImgElement.height = 100;
  return jpegImgElement;
}

document.addEventListener("DOMContentLoaded", function() {
  const bodyElement = document.body;
  bodyElement.appendChild(createTextElement("JavaScript由来<img>要素・PNG画像"));
  bodyElement.appendChild(createPngImgElement());
  bodyElement.appendChild(createTextElement("JavaScript由来<img>要素・JPEG画像"));
  bodyElement.appendChild(createJpegImgElement());
});
