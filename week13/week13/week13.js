//步驟1:右上角 Java 改P5.js
//步驟2:week13_5_dinner_random 程式去轉檔
//https://pde2js.herokuapp.com/ 貼在左邊,按Concert
//步驟3:把右邊程式碼,貼到Processing p5.js這個窗
//Run 會跑出來
//步驟4:把程式存檔成桌面的week13 把它放上Github
//https://github.io/week13
function setup() {
    initializeFields();
    createCanvas(300, 300);
    fill(color(0x97, 0xC4, 0xFA));
    textSize(50);
    textAlign(CENTER, CENTER);
}

var choice;

function draw() {
    background(color(0xFF, 0xFA, 0xE8));
    text("Dinner 1", 150, 50);
    text("Dinner 2", 150, 150);
    text("Dinner 3", 150, 250);
    if (choice == 0)
        ellipse(30, 50, 50, 50);
    if (choice == 1)
        ellipse(30, 150, 50, 50);
    if (choice == 2)
        ellipse(30, 250, 50, 50);
// ellipse圓形/橢圓 x,y,w,h
}

function mousePressed() {
    choice = int(random(3));
}

function initializeFields() {
    choice = -1;
}
