function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
    // 1. 建議放在 setup，設定一次即可
    colorMode(HSB); 
}

function draw() { // 2. 這裡要加大括號 {
    // 3. 所有的繪圖指令都要在括號內
    fill((300 + mouseX / 10) % 360, 100, 100);
    ellipse(mouseX, mouseY, 100, 100);
} // 4. 這裡要關閉大括號 }