const cntEl = document.querySelector(".container-objects");
console.log(cntEl);
    for(let i = 0; i<10 ; i++){
        
        for( let j =0 ;j<10;j++){

            const boxEL = document.createElement("div");
            console.log(boxEL);
            cntEl.append(boxEL);
            if( j%2 === 0){
                boxEL.style.width="28px";
                boxEL.style.height="28px";
                boxEL.style.border="1px solid black";
                boxEL.style.backgroundColor="red";
    
               
            }
            else{
                boxEL.style.width="28px";
                boxEL.style.height="28px";
                boxEL.style.border="1px solid black";
                boxEL.style.backgroundColor="red";
                boxEL.style.borderRadius="50%";
    
            }

    }
}
    




   