const jsontr = '[{"name": "Can"} ]';

// get data
// .then((response) => {
//   return response.json()
// })
// .then((data) => {
//   console.log(data)
// })
// .catch((err) => {
//   console.log(err)
// })

const btnFetchEl = document.getElementById("btn-fetch");
const listEl = document.getElementById("cities");

btnFetchEl.addEventListener("click", handleFetch);

function handleFetch(){
  fetch("https://64318e0d3adb1596516f1b61.mockapi.io/citys")
  .then((response)=>{return response.json()
  .then((data)=>{createCityElements(data)})
  .catch((err)=>{console.log(err)})
  })
  
}

function createCityElements(data){
  data.forEach((citys)=>{
    const titleEl = document.createElement("li");
    titleEl.textContent = citys.name

    listEl.append(titleEl )
  })
}