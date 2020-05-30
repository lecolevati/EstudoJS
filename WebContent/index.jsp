<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<!--  
<script type="text/javascript" src=./js/script1.js></script>
-->
<script type="text/javascript" src=./js/script2.js></script>

</head>
<body>
	<div id = "calc">
		<p><h1>Calculos Aritméticos</h1><br>
		<input type="number" placeholder="Numero 1" id="num1">
		<br>
		<input type="number" placeholder="Numero 2" id="num2">
		<br>
		<br>
		<input type="radio" id="soma" name="operacao" value="soma">
		<label for="soma">Soma</label>
		<br>
		<input type="radio" id="sub" name="operacao" value="sub">
		<label for="sub">Subtração</label>
		<br>
		<input type="radio" id="mult" name="operacao" value="mult">
		<label for="mult">Multiplicação</label>
		<br>
		<input type="radio" id="divi" name="operacao" value="divi">
		<label for="divi">Divisão</label>
		<br>
		<br>
		<button type="button" onclick="getCalculo();">Calcular</button>
		<br>
		<br>
		<input type="number" placeholder="Resultado" id="num3">
	</div>
	<h2><br>-------------------------------------------------------------<br></h2>
	<div id = "fatorial">
		<p><h1>Calculo Fatorial</h1><br>
		<input type="number" placeholder="Numero 1" id="numFat1">
		<br>
		<br>
		<button type="button" onclick="getFat();">Fatorial</button>
		<br>
		<br>
		<input type="number" placeholder="Resultado" id="resFat">
	</div>	
	<h2><br>-------------------------------------------------------------<br></h2>
	<div id = "cpf">
		<p><h1>CPF</h1><br>
		<button type="button" onclick="getCpf();">Gera CPF</button>
		<br>
		<br>
		<input type="text" placeholder="CPF" id="resCpf">
	</div>	
</body>
</html>