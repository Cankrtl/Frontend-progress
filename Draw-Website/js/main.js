const DATA_USERS = [ 
    {firstName:"Emre", 
     lastName:"Ayar", 
     gender:"MALe"},  
    {firstName:"Fatih", 
    lastName:"Bulutoglu", 
    gender:"Male"},  
    {firstName:"Merve", 
    lastName:"Merve", 
    gender:"Female"},  
    {firstName:"Ayşe", 
    lastName:"Ayşe", 
    gender:"Female"},
    {firstName:"Arda", 
    lastName:"Özkanlı", 
    gender:"Male"},
    {firstName:"Hüseyin", 
    lastName:"Özkanlı", 
    gender:"Male"},
    {firstName:"Nimet", 
    lastName:"Özkanlı", 
    gender:"feMale"},
 ];

 const newTitlesArr = DATA_USERS.map(  (user)=>{
    return user.firstName;
} );

var winner = newTitlesArr[Math.floor(Math.random()*newTitlesArr.length)];


const boxEl = document.querySelector(".draw-winner");

let i =0;
function findWinnerGender(Array){
    while (i<DATA_USERS.length){

        if(winner === DATA_USERS[i].firstName){
            if(DATA_USERS[i].gender.toLocaleLowerCase() === "male"){
                return "MR";
            }else{
                return "MRs";

            }
        }
        i++;
    }
}


boxEl.textContent=`${findWinnerGender(DATA_USERS)} ${winner}`;

