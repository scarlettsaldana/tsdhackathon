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


scores = [{index:0, feedback: "<q>Stanford professors join Biden-Harris transition team</q><br><b>By Jessica Zhu and Cameron Ehsan on November 14, 2020<b><br><br><br><em>click the photo on the left to read the article! enjoy!<em>"},
{index:1, feedback: "<q>The Daily&#146s Football Season Predictions</q><br><b>By Cybele Zhang, Michael Espinosa, Daniel Wu and Jeremy Rubin on November 7, 2020<b><br><br><br><em>click the photo on the left to read the article! enjoy!<em>"},
{index:2, feedback: "<q>On policing at Stanford</q><br><b>By Op-Ed on November 11, 2020<b><br><br><br><em>click the photo on the left to read the article! enjoy!<em>"},
{index:3, feedback: "<q>Female madness, decapitation and cults in <i>Hereditary</i></q><br><b>By Emma K Wang on November 11, 2020<b><br><br><br><em>click the photo on the left to read the article! enjoy!<em>"},
{index:4, feedback: "<q>Among Us, Minecraft and Animal Crossing: Video gaming during quarantine</q><br><b>By Iliana Garner on November 12, 2020<b><br><br><br><em>click the photo on the left to read the article! enjoy!<em>"},
{index:5, feedback: "<q>16 male <i>Bachelorette</i> contestants forced to date each other after Clare Crawley&#146s surprise departure</q><br><b>Satire by Charlie Kogen on November 8, 2020<b><br><br><br><em>click the photo on the left to read the article! enjoy!<em>"}];

for (i=0; i<scores.length; i++) {
	var element = document.getElementById("photo" + String(1 + i));
	if (element !== null) {
		element.style.display = "none";
	}
}

for(i=0;i<scores.length; i++) {
if(highest == scores[i].index) {
var element1 = document.getElementById("answer7");
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
