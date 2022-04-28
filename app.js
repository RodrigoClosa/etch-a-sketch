const container = document.querySelector(".container");
const buttonsContainer = document.querySelector(".buttons");
const section = document.querySelector(".section");
const btnBlack = document.createElement("button");
const btnGrey = document.createElement("button");
const btnRgb = document.createElement("button");
const btnSize = document.createElement("button");

window.onload = () => {
    const boxes = container.querySelectorAll(".box");
    boxes.forEach(box => box.addEventListener("mouseover", () => {
        box.style.background = "black";
    }))
}

function createDivs (col, rows) {
    for (let i = 0; i < (col * rows); i++) {
        const div = document.createElement("div");
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add("box");
    }
}
createDivs (16, 16);

function greyColor () {
    const boxes = container.querySelectorAll(".box");
    btnGrey.textContent = "Grey";
    btnGrey.addEventListener("click", () => {   
        boxes.forEach(box => box.addEventListener("mouseover", () => {
            let randomNum = Math.floor(Math.random() * 255);
            box.style.background = `rgb(${randomNum}, ${randomNum}, ${randomNum})`;
        }))
    });
    buttonsContainer.appendChild(btnGrey).classList.add("btn");
}
greyColor();

function blackColor () {
    const boxes = container.querySelectorAll(".box");
    btnBlack.textContent = "Black";
    btnBlack.addEventListener("click", () => {   
        boxes.forEach(box => box.addEventListener("mouseover", () => {
            box.style.background = "black";
        }))
    });
    buttonsContainer.appendChild(btnBlack).classList.add("btn");
}
blackColor();

function rgbColor () {
    const boxes = container.querySelectorAll(".box");
    btnRgb.textContent = "RGB";
    btnRgb.addEventListener("click", () => {   
        boxes.forEach(box => box.addEventListener("mouseover", () => {
            let R = Math.floor(Math.random() * 255);
            let G = Math.floor(Math.random() * 255);
            let B = Math.floor(Math.random() * 255);
            box.style.background = `rgb(${R}, ${G}, ${B})`;
        }))
    });
    buttonsContainer.appendChild(btnRgb).classList.add("btn");
}
rgbColor();

function reSet() {
    const boxes = container.querySelectorAll(".box");
    boxes.forEach(box => box.remove());
} 


function reSize() {
    btnSize.textContent = "Grid Size";
    btnSize.addEventListener("click", () => {
        let user = prompt("Choose a grid size")
        if(user === null || user < 1) {
            reSet()
            createDivs(16,16)
            blackColor()
            greyColor()
            rgbColor()
        } else {
            reSet()
            createDivs(user,user)
            blackColor()
            greyColor()
            rgbColor()  
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add("btn");
}
reSize();