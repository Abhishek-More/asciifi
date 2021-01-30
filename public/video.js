{
  let display = document.getElementById("disp");
  let video = document.getElementById("vid"); // video is the id of video tag
  let height = 480;
  let width = 640;
  let src = new cv.Mat(height, width, cv.CV_8UC4);
  let cap = new cv.VideoCapture(video);
  function processVideo() {
    cap.read(src);
    let frame = resizeImg(src, 120);
    frame = grayify(frame);
    let characters = asciify(frame);
    return characters
  }
  setInterval(processVideo, 15)

  var chars = [];

  if(1==1) {
    chars = [".", ",", ":", ";", "+", "*", "?", "%", "S", "#", "@"];
  } else {
    chars = ["@", "#", "S", "%", "?", "*", "+", ";", ":", ",", "."]
  }

  function resizeImg(img, newWidth) {
    let newMat = new cv.Mat();
    var width = img["cols"];
    var height = img["rows"];
    let ratio = height / width;
    let newHeight = Math.floor(newWidth * ratio * 0.75);

    cv.resize(img, newMat, new cv.Size(newWidth, newHeight));
    return newMat;
  }

  function grayify(img) {
    let newMat = new cv.Mat();
    cv.cvtColor(img, newMat, cv.COLOR_RGBA2GRAY);
    return newMat;
  }

  function asciify(img) {
    let data = img.data;
    let characters = "";
    var characterLine = "";
    for (var rows = 0; rows < img.rows; rows++) {
      for (var cols = 0; cols < img.cols; cols++) {
        let pixel = data[rows * img.cols + cols];
        let newChar = chars[Math.floor(pixel / 25)];
        characterLine += newChar;
      }

      //console.log(characters)
      characterLine += "\n";
      characters += characterLine;
      characterLine = "";
    }
    display.innerHTML = characters;
    return characters;
  }
}