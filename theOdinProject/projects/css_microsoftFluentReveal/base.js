// const grid = document.querySelector(".wrapper"),
//     cells = document.querySelector(".grid-container"),
//     borderLightenStyle = document.querySelector(".gradient-play").style;

// grid.onmousemove = e => {
//     const cellsBCR = cells.getBoundingClientRect();

//     borderLightenStyle.left = e.pageX - cellsBCR.left + "px";
//     borderLightenStyle.top = e.pageY - cellsBCR.top + "px";
// };


let logger = document.getElementById("logger");
let elms = document.getElementsByTagName("body");
let body = elms[0];
let tracker = document.getElementById("tracker");

let wrapper2 = document.getElementById("wrapper2");
let outer = document.getElementById("outer");
let inner = document.getElementById("inner");
wrapper2.addEventListener("mousemove", handleMouseMove);
//outer.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(e) {
    let offsetX = e.clientX;
    let offsetY = e.clientY;
    let linearGrad = `linear-gradient(#f6b73c, #4d9f0c) 5`;
    let gradient = `radial-gradient(circle 50px at ${offsetX}px ${offsetY}px, rgba(255,255,255,0.3), rgba(255,255,255,0)), radial-gradient(circle ${70}px at ${offsetX}px ${offsetY}px, rgba(255,255,255,0), rgba(255,255,255,0.3), rgba(255,255,255,0), rgba(255,255,255,0))`;
    // let gradient = `radial-gradient(circle 150px at ${offsetX}px ${offsetY}px, rgba(255,0,0,0.3), rgba(255,255,255,0)), radial-gradient(circle ${70}px at ${offsetX}px ${offsetY}px, rgba(255,255,255,0), rgba(255,255,255,0.3), rgba(255,255,255,0), rgba(255,255,255,0))`;
    outer.style.backgroundImage = gradient;
    // let gradient2 = `radial-gradient( #fff, transparent 60%) 75/50`;
    // inner.style.borderImage = gradient2;
}

function updateTrackerPosition(e) {
    let xPos = e.pageX - 40;
    let yPos = e.pageY - 40;

    let bcr = outer.getBoundingClientRect();
    let offsetX = e.clientX;
    let offsetY = e.clientY;

    // let gradient = `radial-gradient(circle 150px at ${offsetX}px ${offsetY}px , #fff, transparent 60%)`;
    let gradient = `radial-gradient(circle 150px at ${offsetX}px ${offsetY}px, rgba(255,255,255,0.3), rgba(255,255,255,0)), radial-gradient(circle ${70}px at ${offsetX}px ${offsetY}px, rgba(255,255,255,0), rgba(255,255,255,0.3), rgba(255,255,255,0), rgba(255,255,255,0))`;
    outer.style.backgroundImage = gradient;
}