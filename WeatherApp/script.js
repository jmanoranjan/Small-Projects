const wrapper  = document.querySelector(".wrapper");
let inputPart = document.querySelector('.input-part');
 let infoTxt = document.querySelector(".info-txt");
 let inputField = document.querySelector("input");
 let locationBtn = document.querySelector('button');
 let apikey = 'bf924d394385906abd1c7171da88fb5f';
let api;

 inputField.addEventListener("keyup", e =>{
    if(e.key == "Enter" && inputField.value != ""){
       requestApi(inputField.value);
    }
    
});


locationBtn.addEventListener("click",e=>{
if(navigator.geolocation){//checking if it brower support geolocation or not
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}else{
 alert('Your browser not support geolocation Api')   
}
})
//onerror
function onError(error){
    infoTxt.innerText = error.message;
    infoTxt.classList.add("error");
}
//onsuccess
function onSuccess(position){
const {latitude, longitude} = position.coords;
api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}$lon=${longitude}&appid=${apikey}`
fetchData();
}


function requestApi(city){
   ;

api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
fetchData();

}

function fetchData(){
    infoTxt.innerText = 'Getting weather details......';
    infoTxt.classList.add("pending")
    fetch(api).then(response => response.json()).then(result => weatherDetails(result));
}

//in weatherDetails function we can assing our detils to different keys 

function weatherDetails(info){
console.log(info);
}