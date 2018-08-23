function print() {
				var name1_value = document.getElementById("name1").value;
				if(name1_value != ""){
					document.getElementById("massage_1").innerHTML += "<p>" + name1_value + "</p>";
					document.getElementById("name1").value = "";
				}
				else  {
					document.getElementById("text_p").style.display="block";
					document.getElementById("text_p").style.color="red";
				}
				
}

function text_1() {
	console.log('l');
				document.getElementById("text_p").style.display="none";
}

function text_print() {
				var name3_value = document.getElementById("name_3").value;
				document.getElementById("ma   ssage_2").innerHTML = name3_value;
}