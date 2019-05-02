let audio = new Audio("intro.ogg");

if(localStorage.getItem("atual") != null){
	updateIntro(localStorage.getItem("atual"));
}

botoes = document.getElementsByClassName("movie_option");
for(let b of botoes){
	b.addEventListener("click", function() {
		audio.currentTime = 0;
		updateIntro(b.getAttribute("data-value"));		
		audio.play();
	});		
}


function updateIntro(number){
	$.ajax({url: "https://swapi.co/api/films/" + number + "/", success: function(result){		
		updateElement(result.title, result.episode_id, result.opening_crawl);
		localStorage.setItem("atual", number);
	}});
}

function updateElement(title, id, crawl){
	let intro = document.getElementsByClassName("reading-animation")[0];
	intro.innerText = "Episode " + getRom(id) + "\n" + title.toUpperCase() + "\n\n" + crawl;	
}

function getRom(n){
	switch(n){
		case 1: return "I";
		case 2: return "II";
		case 3: return "III";
		case 4: return "IV";
		case 5: return "V";
		case 6: return "VI";
		case 7: return "VII";
	}
}
