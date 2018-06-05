$('.buttonsPanel').on('click', event => handleClick(event));

function handleClick(e)
{

    $('.msg').html(e.target.className);
}


$('.panelButton').on('click', event => handleClick2(event));


function handleClick2(e)
{
    // get the panel id from the clicked button
    var panelId = $(e.target).attr('data-pandelid');
    $('#'+panelId).toggle();
}
