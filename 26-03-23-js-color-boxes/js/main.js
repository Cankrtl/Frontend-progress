const colors = ["red", "yellow", "blue", "pink", "green", "aqua"];

const containerObjectsEl = document.querySelector(".container-objects");

let k = 0; 

for(let i = 0; i<10; i++){
    
    const rnd = Math.floor(Math.random() * colors.length);
    console.log(rnd);

    const boxEl = document.createElement("div");
    boxEl.style.width = "100px";
    boxEl.style.height = "100px";
    boxEl.style.backgroundColor = colors[rnd]
    boxEl.style.border = "2px solid black"
    boxEl.style.color = "white";
    boxEl.textContent = i + 1;
      
    
    
   
    document.body.append(boxEl);
 
}