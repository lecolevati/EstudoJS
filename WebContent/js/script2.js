function getSoma() {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var soma = num1 + num2;
	document.getElementById("num3").value = soma;
}

function getCalculo() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var res = 0.0;
	var op = "";
	if (document.getElementById("soma").checked) {
		op = document.getElementById("soma").value;
		res = num1 + num2;
	} else if (document.getElementById("sub").checked) {
		op = document.getElementById("sub").value;
		res = num1 - num2;
	} else if (document.getElementById("mult").checked) {
		op = document.getElementById("mult").value;
		res = num1 * num2;
	} else if (document.getElementById("divi").checked) {
		op = document.getElementById("divi").value;
		res = num1 / num2;
	}
	console.log(op);
	console.log(res);
	document.getElementById("num3").value = res.toPrecision(15);
}

function getFat() {
	var valor = document.getElementById("numFat1").value;
	var fat = calcFatorial(valor);
	document.getElementById("resFat").value = fat;
}

function calcFatorial(valor) {
	if (valor == 1 || valor == 0){
		return 1;
	} else {
		return valor * calcFatorial(valor - 1);
	}
}


function getCpf() {
	var cpf = geraCpf();
	var cpfMask = "";
	var vetCpf = cpf.split('');
	for (i = 0 ; i < 11 ; i++){
		if (i == 9){
			cpfMask = cpfMask + '-';
		}
		if (i % 3 == 0 && i != 0 && i != 9){
			cpfMask = cpfMask + '.';
		}
		cpfMask = cpfMask + vetCpf[i];

	}
	console.log(cpfMask);
	document.getElementById("resCpf").value = cpfMask;
}

function geraCpf() {
	var cont1 = 10;
	var cont2 = 11;
	
	var random = Math.floor(Math.random() * 9) + 1;
	var cpf = random.toString();
	var dig1 = random * cont1;
	var dig2 = random * cont2;
	cont1--;
	cont2--
	for (i = 0 ; i < 8 ; i++){
		random = Math.floor(Math.random() * 10);
		dig1 = dig1 + random * cont1;
		cont1--;
		dig2 = dig2 + random * cont2;
		cont2--;
		cpf = cpf + random.toString();
	}
	console.log(cpf);
	dig1 = dig1 % 11;
	if (dig1 < 2){
		dig1 = 0
	} else {
		dig1 = 11 - dig1;
	}
	console.log(dig1);
	
	dig2 = dig2 + dig1 * 2;
	dig2 = dig2 % 11;
	if (dig2 < 2){
		dig2 = 0
	} else {
		dig2 = 11 - dig2;
	}	
	console.log(dig2);
	
	cpf = cpf + dig1.toString() + dig2.toString();
	console.log(cpf);

	return cpf;
}