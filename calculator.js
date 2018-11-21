function getNumber(n) {
	var inputv = document.getElementById('input');
	switch(n) {
		case 1: 
			inputv.value += '1';
			break;
		case 2: 
			inputv.value += '2';
			break;
		case 3: 
			inputv.value += '3';
			break;
		case 4: 
			inputv.value += '4';
			break;
		case 5: 
			inputv.value += '5';
			break;
		case 6: 
			inputv.value += '6';
			break;
		case 7: 
			inputv.value += '7';
			break;
		case 8: 
			inputv.value += '8';
			break;
		case 9: 
			inputv.value += '9';
			break;
		case 0: 
			inputv.value += '0';
			break;
	}
}

function getOperand(operand) {
	var inputv = document.getElementById('input');
	switch(operand){
		case '+':
			inputv.value += '+';
			break;
		case '-':
			inputv.value += '-';
			break;
		case '*':
			inputv.value += '*';
			break;
		case '/':
			inputv.value += '/';
			break;
		case '+/-':
			inputv.value += '-' + inputv.value;
			break;
		case '%':
			inputv.value += "%";
			break;
		case '^':
			inputv.value += "**";
			break;
		case '(':
			inputv.value += "(";
			break;
		case ')':
			inputv.value += ")";
			break;
	}
}

function compute() {
	var inputv = document.getElementById('input');
	ans = eval(inputv.value);
	document.getElementById('answer').value = ans;
}

function backspace() {
	var inputv = document.getElementById('input');
	var inputval = inputv.value;
	if (inputval > 0) {
		inputval = inputval.substring(0, inputval.length - 1);
		inputv.value = inputval;
	}
}

function clearScreen(){
	document.getElementById('input').value = ""
	document.getElementById('answer').value = "";
}

function round(){
	document.getElementById('answer').value = "";
	var input = document.getElementById("input");
	ans = Math.round(+eval(input.value));
	document.getElementById('answer').value = ans;
}