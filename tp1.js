
  let ladiv  = document.getElementById("weather-result");
  let button = document.getElementById('ask-weather');


function ajaxGet(url,mesFunction){
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200){
            mesFunction(req.responseText);
        }
    }
    req.send(null);
}
// function meteo(){
//     donneesMeteo = JSON.parse(reponse)   
// }

ajaxGet("https://www.prevision-meteo.ch/services/json/paris", function(reponse){

     let donneesMeteo = JSON.parse(reponse)
      meteoParis = donneesMeteo.current_condition
      console.log(meteoParis);
      button.addEventListener('click', () => {
      ladiv.innerHTML = " temps: " + meteoParis.condition + "<br>" + " température de " + meteoParis.tmp +" degres"+"<br>" + "vitesse du vent " + meteoParis.wnd_spd + " km/h" ; 
    })  
})
