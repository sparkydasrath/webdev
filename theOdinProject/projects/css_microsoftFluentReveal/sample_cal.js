const grid = document.querySelector(".grid"),
    cells = document.querySelector(".cells"),
    borderLightenStyle = document.querySelector(".border-lighten").style;

grid.onmousemove = e => {
    const cellsBCR = cells.getBoundingClientRect();

    borderLightenStyle.left = e.pageX - cellsBCR.left + "px";
    borderLightenStyle.top = e.pageY - cellsBCR.top + "px";
};