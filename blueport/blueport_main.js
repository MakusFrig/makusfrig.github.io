var states = [];



var i;
for (i = 0; i < 9; i++) {

	states[i] = 0;

}

var buttons = document.getElementById("buttons").children;


function num_to_state(n) {


	if (n == 0) {
		return "imgs/red.svg";
	} else if (n == 1) {

		return "imgs/green.svg";
	} else {
		return "imgs/blue.svg";
	}
}

function catch_states() {



	for (var i = 0; i < states.length; i++) {

		if (states[i] >= 3) {
			states[i] = 0;
		}
	}


}


function change_state(n) {

	states[n] += 1;
	states[n - 1] += 1;
	states[n - 2] += 1;



	catch_states();

	/*
		document.getElementById('b'+n.toString()).setAttribute("src", num_to_state(states[n]));
		document.getElementById('b'+(n+1).toString()).setAttribute("src", num_to_state(states[1+n]));
		document.getElementById('b'+(n-1).toString()).setAttribute("src", num_to_state(states[n-1]));

	*/


	set_buttons();

	var win = true;

	for (var i = 1; i < states.length - 1; i++) {
		if (states[i] != 2) {
			win = false;
			break;
		}
	}

	if (win) {
		document.getElementById("won").innerHTML = "Congrats!";
	}


}



function set_buttons() {



	for (var i = 0; i < buttons.length; i++) {

		buttons[i].setAttribute("src", num_to_state(states[i + 1]));

		buttons[i].setAttribute("onclick", "change_state('" + (parseInt(buttons[i].id[1]) + 1) + "');");
	}
	return;
}

function random_number() {
	return Math.floor(Math.random() * 8) + 1;
}


function generate() {

	document.getElementById("won").innerHTML = "<br>";

	for (var i = 0; i < 10; i++) {

		//this loop is just so we rly mix thing sup

		var g = random_number() + 1;

		states[g] += 1;
		states[g - 1] += 1;
		states[g - 2] += 1;



		catch_states();


		set_buttons();


	}
}



set_buttons();



generate();