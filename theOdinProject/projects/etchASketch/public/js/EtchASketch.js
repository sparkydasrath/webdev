let EtchASketch = (function () {

    let DOM = {};
    let shadeClassName = "shade";
    let rowAndCol = 5;

    function cacheDOM() {
        DOM.$container = $("#container");
        DOM.$reset = $("#reset");
    }

    function bindEvents() {
        DOM.$container.mouseover(handleContainerHover);
        DOM.$reset.on("click", handleReset);
    }

    function render() {
        DOM.$container.css({
            "grid-template-columns": `repeat(${rowAndCol}, 1fr)`,
            "grid-template-columns": `repeat(${rowAndCol}, 1fr)`,
        });

        buildGrid(rowAndCol);
    }

    function buildGrid(noOfRowsAndCols) {
        let containerWidth = getContainerDimensions();
        let maxSquareSideLength = Math.floor(containerWidth / noOfRowsAndCols);
        let sq = Math.pow(noOfRowsAndCols, 2);

        for (let i = 0; i < sq; i++) {
            $("<div></div>", {
                class: "square",
                width: maxSquareSideLength,
                height: maxSquareSideLength
            }).appendTo('#container');
        }
    }

    function getContainerDimensions() {
        let contWidth = $(DOM.$container).width();
        return contWidth;
    }

    function handleContainerHover(e) {
        let tar = e.target;
        $(tar).addClass(shadeClassName);
    }

    function handleReset() {
        $(".shade").removeClass();
    }

    function init() {
        cacheDOM();
        bindEvents();
        render();
    }

    return {
        init: init
    }

}());