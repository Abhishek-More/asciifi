{
  let display = document.getElementById("disp");
  let video = document.getElementById("vid"); // video is the id of video tag
  let height = 480;
  let width = 640;
  let src = new cv.Mat(height, width, cv.CV_8UC4);
  let cap = new cv.VideoCapture(video);
  let inverted = false;
  let color = "white";
  let inv_button = document.getElementById("invert_button");
  let w_button = document.getElementById("white_button");
  let r_button = document.getElementById("red_button");
  let g_button = document.getElementById("green_button");
  let b_button = document.getElementById("blue_button");

  inv_button.addEventListener('click', () => {
    inverted = !inverted;
    if(!inverted) {
      chars = [".", ",", ":", ";", "+", "*", "?", "%", "S", "#", "@"];
    } else {
      chars = ["@", "#", "S", "%", "?", "*", "+", ";", ":", ",", "."]
    }
  });

  w_button.addEventListener('click', () => {color="white"});
  r_button.addEventListener('click', () => {color="red"});
  g_button.addEventListener('click', () => {color="green"});
  b_button.addEventListener('click', () => {color="blue"});


  function processVideo() {
    cap.read(src);
    let frame = resizeImg(src, 120);
    frame = grayify(frame);
    let characters = asciify(frame);
    return characters
  }
  setInterval(processVideo, 15)

  var chars = [];

  if(!inverted) {
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
      for (var cols = img.cols - 1; cols > 0; cols--) {
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
    display.style.color = color;
    return characters;
  }
}
