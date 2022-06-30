const form =  document.querySelector(".input");
const buttons = document.querySelectorAll(".btn");
const cardText = document.querySelectorAll(".card-text");
const cardTitle = document.querySelectorAll(".card-title");


//functions to calculate all needed
function MetersToFeet(value) {
    const answer = value * 3.281;
    return answer.toFixed(3);
  
}
function FeetToMeters(value){
    const answer = value / 3.281 ;
    return answer.toFixed(3);
}
function LitresToGallon(value){
    const answer = value / 3.785;
    return answer.toFixed(3);
}
function GallonsToLitres(value){
    const answer = value * 3.785 ;
    return answer.toFixed(3);
}
function KgToPounds(value){
    const answer = value * 2.205 ;
    return answer.toFixed(3);
}
function PoundsToKg(value){
    const answer = value / 2.205 ;
    return answer.toFixed(3);
}

// functions for processing the cALCULATIONS

function DisplayCalc(){
    const value = form.formInput.value;
    
    const answersFucntion = [
        MetersToFeet(value),
        FeetToMeters(value),
        LitresToGallon(value),
        GallonsToLitres(value),
        KgToPounds(value),
        PoundsToKg(value)
    ];

    //create an array of values to be dynamically injected
    cardText.forEach((text, index) => {
        const arr = cardTitle[index].innerHTML.split("(")[1].split(")")[0].split("/");
        const generateHtml = `${value} ${arr[0]} =  ${answersFucntion[index]} ${arr[1]} <br> ${value} ${arr[1]} =  ${answersFucntion[index]} ${arr[0]} `;
        text.innerHTML = generateHtml;
    })

    
}

// form event listeners
form.addEventListener("submit", (e) => {
    e.preventDefault();

    DisplayCalc();

    form.reset();
    
})
//buttons event listeners

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.classList.contains("convert")){
            DisplayCalc();

        }else{
            window.location.reload();
        }
    })
})