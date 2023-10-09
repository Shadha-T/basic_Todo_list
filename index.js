const input = document.getElementById("input");
const button = document.getElementById("button");
const display = document.getElementById("display");


// step - 2
const getInputValue = (event)=>{

    // step -3
    // this is pevent refresh
    event.preventDefault();

    // step -4
    // input value store variable
    const isValue = input.value;

    // step -5
    // check isValue 
    console.log(isValue)


    // step -6
    // then calling another function
    createTodo(isValue)

}



// step - 1
button.addEventListener("click", getInputValue)


// step -7
const createTodo = (isValue)=>{

    // step - 8
    // create an p tag , but not display html code 
    let paragrph = document.createElement("p");

    // step -9
    // insert data into created p tag , but not display html code 
    paragrph.innerHTML = isValue

    // step -10
    // then p dispaly inside display div , display p tag inside display div
    display.appendChild(paragrph);
}