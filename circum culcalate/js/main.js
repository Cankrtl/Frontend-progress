let circleEI = document.querySelector(".circle")

circleEI.addEventListener("click", handleClick);

let radius = circleEI.offsetWidth;
radius = radius - 2;
radius = radius / 2; 


function handleClick(){

    let circum = cevre(radius);
    let area = alan(radius);
    console.log("Çemberin çevresi " +circum +"px" );
    console.log("Çemberin alanı " +area +"px" );


   
}

function cevre(yariCap){
    const pi = 3.14;
    daireCevre = 2 * pi * yariCap;
    return daireCevre;
}

function alan(yaricap){
    const pi = 3.14;
    daireAlan = pi * yaricap*yaricap;
    return daireAlan;
}
