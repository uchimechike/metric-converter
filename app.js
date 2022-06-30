const form =  document.querySelector(".input");
const cardTitle = document.querySelectorAll(".card-title");
const results = document.querySelectorAll(".result");
const buttonConvert = document.querySelector(".convert");
const butttonClear = document.querySelector(".clear");

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
    results.forEach((result, index) => {
        const arr = cardTitle[index].innerHTML.split("(")[1].split(")")[0].split("/");
        const generateHtml = `<p>${value} ${arr[0]} =  ${answersFucntion[index]} ${arr[1]} <br> ${value} ${arr[1]} =  ${answersFucntion[index+1]} ${arr[0]}</p>`;
        result.classList.remove("d-none");
        result.innerHTML = generateHtml;
    });

    

    
};

// form event listeners
form.addEventListener("submit", (e) => {
    e.preventDefault();
    DisplayCalc();
    scrollTo(0,400)
    form.reset();
    
});

//adding event listeners to convert button
buttonConvert.addEventListener("click", (e) => {
    e.preventDefault();
    DisplayCalc();
    scrollTo(0,400)
    form.reset();
})

//adding event listener to clear button

butttonClear.addEventListener("click", () => {
    window.location.reload();
})