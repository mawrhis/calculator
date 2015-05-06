			var action = {};
			var display = {};
			var chain = 0
			var IsPressed = 0

			function erase() {//if button is pressed display is erased
				document.getElementById('display').innerHTML = "";
				var action = 0;
				chain = 0;
				console.log ('action=' + action);
				console.log ('chain=' + chain);

			}

			function button(ele){
				var id = ele.id;
				document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById( id ).innerHTML;
				display = document.getElementById('display').innerHTML;
				console.log ('chain=' + chain);
			}
			


			function buttonAction(ele) { //(ele)
				var ActionId = ele.id;
				console.log ('ActionId=' + ActionId)
				var sign = 0
				if (ActionId == "plus"){
					sign = " + "
				}
				if (ActionId == "minus"){
					sign = " - "
				}
				if (ActionId == "divide"){
					sign = " / "
				}
				if (ActionId == "times"){
					sign = " * "
				}
				console.log ('chain=' + chain);
				if (IsPressed == 1){
					display=chain;
				}
				if (chain == 0){
					chain = document.getElementById('display').innerHTML + sign;
				}else{
					chain = chain + document.getElementById('display').innerHTML + sign;
				}
				document.getElementById('display').innerHTML = "";
				console.log ('chain=' + chain);
				//document.getElementById('display').innerHTML = eval(chain);
			}
			
			/*function actionAdd(number1,number2){
				return parseFloat(number1) + parseFloat(number2)
			}*/
			
			function buttonIs() {//adds + to display
				IsPressed = 1
				display = document.getElementById('display').innerHTML;
				chain = chain + display;
				console.log (chain);
				document.getElementById('display').innerHTML = Math.ceil(eval(chain) * 1000000000) / 1000000000;
				chain = 0;
				console.log (chain);
				
				//document.getElementById('display').innerHTML = Math.ceil(z * 1000000000) / 1000000000;

			}
			function point() {//adds + to display
				document.getElementById('display').innerHTML = number1;
			}				
