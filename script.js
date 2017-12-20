

function changeview(elem,current){
		var elements = document.querySelectorAll(".material-icons"), i, len;
			  for (i = 0, len = elements.length; i < len; i++) {
			    elements[i].style.color = 'rgb(0,149,204)';
			  }
		var elements = document.querySelectorAll(".chapterName"), i, len;
			  for (i = 0, len = elements.length; i < len; i++) {
			    elements[i].style.color = 'rgb(0,149,204)';
			  }
		var elements = document.querySelectorAll(".chapter"), i, len;
			  for (i = 0, len = elements.length; i < len; i++) {
			    elements[i].style.backgroundColor = 'white';
			  }

		elem.children[1].style.color = 'white';
		elem.children[0].children[0].style.color = 'white';
		elem.style.backgroundColor = 'rgb(0,149,204)';

		var elements = document.querySelectorAll(".displayHide"), i, len;
			for (i = 0, len = elements.length; i < len; i++) {
			    elements[i].style.display = 'none';
			}
		document.getElementById(current).style.display = 'block';
}




function ImgOne(x) {
    x.src = 'img/SalesWorks.jpg'

}

function ImgTwo(x) {
    x.src = 'img/SalesWorks2.jpg'
}

/******For acordion script*******************************************/


 function  changeButton(el){
        el.classList.toggle("active");
        var panel = el.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }


function chanel(ch){
	switch(ch){
		case 1: 
			var elem = document.getElementsByClassName('videoholder');	
			var i;	
			for(var i=0; i< elem.length;i++){
				elem[i].style.display = 'none';
				
			}
			document.getElementById('video1').style.display = 'block';
			stopVideo();
		break;
		case 2: 
			var elem = document.getElementsByClassName('videoholder');	
			var i;	
			for(var i=0; i< elem.length;i++){
				elem[i].style.display = 'none';
			}
			document.getElementById('video2').style.display = 'block';
			stopVideo();
		break;
		case 3: 
			var elem = document.getElementsByClassName('videoholder');	
			var i;	
			for(var i=0; i< elem.length;i++){
				elem[i].style.display = 'none';
			}
			document.getElementById('video3').style.display = 'block';
			stopVideo();
		break;
		case 4: 
			var elem = document.getElementsByClassName('videoholder');	
			var i;	
			for(var i=0; i< elem.length;i++){
				elem[i].style.display = 'none';
			}
			document.getElementById('video4').style.display = 'block';
			stopVideo();
		break;
		case 5: 
			var elem = document.getElementsByClassName('videoholder');	
			var i;	
			for(var i=0; i< elem.length;i++){
				elem[i].style.display = 'none';
			}
			document.getElementById('video5').style.display = 'block';
			stopVideo();
		break;
		case 6: 
			var elem = document.getElementsByClassName('videoholder');	
			var i;	
			for(var i=0; i< elem.length;i++){
				elem[i].style.display = 'none';
			}
			document.getElementById('video6').style.display = 'block';
			stopVideo();
		break;
		case 8: 
			var elem = document.getElementsByClassName('videoholder');	
			var i;	
			for(var i=0; i< elem.length;i++){
				elem[i].style.display = 'none';
			}
			document.getElementById('video8').style.display = 'block';
			stopVideo();
		break;
		case 9: 
			var elem = document.getElementsByClassName('videoholder');	
			var i;	
			for(var i=0; i< elem.length;i++){
				elem[i].style.display = 'none';
			}
			document.getElementById('video9').style.display = 'block';
			stopVideo();
		break;
		case 10: 
			var elem = document.getElementsByClassName('videoholder');	
			var i;	
			for(var i=0; i< elem.length;i++){
				elem[i].style.display = 'none';
			}
			document.getElementById('video10').style.display = 'block';
			stopVideo();
		break;
		default:
			var elem = document.getElementsByClassName('videoholder');	
			var i;	
			for(var i=0; i< elem.length;i++){
				elem[i].style.display = 'none';
			}
			document.getElementById('video1').style.display = 'block';
			stopVideo();
	}

}

 function stopVideo() {
	var div = document.getElementById("cinema");
	for(var i=0;i<=5;i++){
	let iframe = div.getElementsByTagName("iframe")[i].contentWindow;
	iframe.postMessage('{"event":"command","func":"stopVideo","args":""}','*');
	}
}
/**************************************/
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        getnews(this);
    }
};
xhttp.open("GET", "news.xml", true);
xhttp.send();

function getnews(xml) {
    var title, date, i, desc, xmlDoc, txt='';
    xmlDoc = xml.responseXML;
    title = xmlDoc.getElementsByTagName("title");
    date = xmlDoc.getElementsByTagName("date");
    desc = xmlDoc.getElementsByTagName("desc")
	for (i = 0 ; i <title.length; i++) {
		txt +="<h3>"+ title[i].childNodes[0].nodeValue +"<br>"+
		"<small>"+date[i].childNodes[0].nodeValue+"</small></h3><p>"+
		desc[i].childNodes[0].nodeValue + "</p><br><hr>";
	}
    document.getElementById("demo").innerHTML = txt; 
}
/**************************************************************************/
function displaypasscheck(current){
	var elements = document.querySelectorAll(".passcheck"), i, len;
	  for (i = 0, len = elements.length; i < len; i++) {
	  elements[i].style.display = 'none';
	 	}
	document.getElementById(current).style.display = 'block';
	document.getElementById('statinfo').innerHTML = '';
}

function passcheck1(){
	var login = document.getElementById('logg1').value;
	var password = document.getElementById('pass1').value;
	var params = "login="+login+"&pass="+password;
  loadDoc('http://localhost:5000/passcheck1')

		  function loadDoc(url) {
		  var xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		    	if(xhttp.responseText == 'true'){
		    		document.getElementById("passcheck1").style.display = 'none';
		    		getinfoUA();
		    	}
		    	else{
		      document.getElementById("errmess1").innerHTML = 'Введены неверные логин и пароль';
		      document.getElementById("demot1").innerHTML = xhttp.responseText;
		  		}
		  	document.getElementById('logg1').value = '';
		  	document.getElementById('pass1').value = '';
		    }
		  };
		  xhttp.open("GET", url+"?"+params, true);
		  xhttp.send();
			}	
}

function passcheck2(){
	var login = document.getElementById('logg2').value;
	var password = document.getElementById('pass2').value;
	var params = "login="+login+"&pass="+password;
  loadDoc('http://localhost:5000/passcheck2')

		  function loadDoc(url) {
		  var xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		    	if(xhttp.responseText == 'true'){
		    		document.getElementById("passcheck2").style.display = 'none';
		    		getinfoNM();
		    	}
		    	else{
		      document.getElementById("errmess2").innerHTML = 'Введены неверные логин и пароль';
		      document.getElementById("demot2").innerHTML = xhttp.responseText;
		  		}
		  	document.getElementById('logg2').value = '';
		  	document.getElementById('pass2').value = '';
		    }
		  };
		  xhttp.open("GET", url+"?"+params, true);
		  xhttp.send();
			}	
}

function getinfoUA(){
	 loadDB('http://localhost:5000/ua',funforfun);

	function loadDB(url, fun) {
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      funforfun(this);
	    }
	  };
	  xhttp.open("GET", url, true);
	  xhttp.send();
	}



	function funforfun(xhttp){
	  let data = JSON.parse(xhttp.responseText);

	  var x,y,z; var txt = '<table><tr><th>Name</th><th>ID</th><th>SW wersion</th></tr>';
	      for (x in data){  
	        for (y in data[x]){
	          txt += '<tr>'
	          for (z in data[x][y]){ 
	            if (typeof(data[x][y][z]) != 'object')
	           txt +='<td>' + data[x][y][z] + '</td>';
	           }
	          
	         }txt += '</tr>';}
	      document.getElementById("statinfo").innerHTML = txt; 
	}
}


function getinfoNM(){
	 loadDB('http://localhost:5000/nm',funforfun);

	function loadDB(url, fun) {
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      funforfun(this);
	    }
	  };
	  xhttp.open("GET", url, true);
	  xhttp.send();
	}



	function funforfun(xhttp){
	  let data = JSON.parse(xhttp.responseText);

	  var x,y,z; var txt = '<table><tr><th>Name</th><th>ID</th><th>SW wersion</th></tr>';
	      for (x in data){  
	        for (y in data[x]){
	          txt += '<tr>'
	          for (z in data[x][y]){ 
	            if (typeof(data[x][y][z]) != 'object')
	           txt +='<td>' + data[x][y][z] + '</td>';
	           }
	          
	         }txt += '</tr>';}
	      document.getElementById("statinfo").innerHTML = txt; 
	}
}