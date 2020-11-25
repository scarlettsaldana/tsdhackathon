
document.getElementById("form").onsubmit=function() {
	   
	  category = document.querySelector('input[name = "category"]:checked').value;
	   
	  
	  topic = document.querySelector('input[name = "topic"]:checked').value;
	   
	  spare = document.querySelector('input[name = "spare"]:checked').value;


    BidenHarris = 0;
    SPredictions = 0;
    Policing = 0;
    Hereditary = 0;
    Videogaming = 0;
    Bachelorette = 0;


	  function eachscore(x){
	  if(x == "BidenHarris") { BidenHarris = BidenHarris + 1}
	  if(x == "SPredictions") { SPredictions = SPredictions + 1}
      if(x == "Policing") { Policing = Policing + 1}
      if(x == "Hereditary") { Hereditary = Hereditary + 1}
      if(x == "Videogaming") { Videogaming = Videogaming + 1}
      if(x == "Bachelorette") { Bachelorette = Bachelorette + 1}
	  }

	  eachscore(eval("category"));
	  eachscore(eval("topic"));
	  eachscore(eval("spare"));
	  
	  
	  
	  all = [BidenHarris, SPredictions, Policing, Hereditary, Videogaming, Bachelorette];
	  

	maxscore = Math.max.apply(Math,all);
	

	for(i=0; i<all.length; i++) {
	if(all[i]==maxscore) {
	highest = i;
	}
	}


scores = [{index:0, feedback: "<q>Stanford professors join Biden-Harris transition team </q>"},
{index:1, feedback: "<q>The Daily&#146s Football Season Predictions</q>"},
{index:2, feedback: "<q>On policing at Stanford</q>"},
{index:3, feedback: "<q>Female madness, decapitation and cults in <i>Hereditary</i></q>"},
{index:4, feedback: "<q>Among Us, Minecraft and Animal Crossing: Video gaming during quarantine</q>"},
{index:5, feedback: "<q>16 male <i>Bachelorette</i> contestants forced to date each other after Clare Crawley&#146s surprise departure</q>"}];

for (i=0; i<scores.length; i++) {
	var element = document.getElementById("photo" + String(1 + i));
	if (element !== null) {
		element.style.display = "none";
	}
}

for(i=0;i<scores.length; i++) {
if(highest == scores[i].index) {
var element1 = document.getElementById("answer6");
if (element1 !== null) {
	element1.innerHTML = scores[i].feedback;
}
var element2 = document.getElementById("photo" + String(1 + highest));
if (element2 !== null) {
	element2.style.display = "block";
}
}
}

return false;
}
