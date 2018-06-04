
var button = document.getElementById('playButton');

console.log("context before click")
console.log(this.toString())

button.addEventListener('click', handleClick.bind(this));



function handleClick(event)
{
    
    console.log('In click event');
    console.log('Context in click event');
    console.log(this.toString());
}
