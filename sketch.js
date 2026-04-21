let capture;

function setup() {
  // 建立一個跟視窗一樣大的畫布
  createCanvas(windowWidth, windowHeight);
  
  // 擷取攝影機影像
  capture = createCapture(VIDEO);
  // 隱藏預設產生的 HTML 影片節點，只在畫布上繪製
  capture.hide();
}

function draw() {
  // 設定背景顏色
  background('#e7c6ff');
  
  // 計算影像顯示的大小（畫布寬高的 60%）
  let w = width * 0.6;
  let h = height * 0.6;
  
  // 將影像繪製在畫布中間
  // 座標計算為：(畫布寬度 - 影像寬度) / 2
  image(capture, (width - w) / 2, (height - h) / 2, w, h);
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
}