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
  
  push();
  // 修正左右顛倒問題：將座標原點移至畫布右側，並水平翻轉座標系
  translate(width, 0);
  scale(-1, 1);
  
  // 繪製影像（由於座標系已翻轉，置中公式依然適用，影像會正確顯示在中間並呈現鏡像效果）
  image(capture, (width - w) / 2, (height - h) / 2, w, h);
  pop();
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
}