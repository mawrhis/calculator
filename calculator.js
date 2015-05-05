			function button(ele){
				var id = ele.id;
				console.log ('area element id = ' + id);
				document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById( id ).innerHTML;
			}

			function erase() {//if button is pressed display is erased
				document.getElementById('display').innerHTML = ""
			}

			var x = {}
			var action = {}
			var y = {}

			function buttonAction(ele) {
				var ActionId = ele.id;
				console.log ('area element id = ' + ActionId);
				if (ActionId == "minus") {
				x = document.getElementById('display').innerHTML;
				action = "Substract";
				document.getElementById('display').innerHTML = "";
				}
				if (ActionId == "plus") {
				x = document.getElementById('display').innerHTML;
				action = "Add";
				document.getElementById('display').innerHTML = "";
				}
				if (ActionId == "times") {
				x = document.getElementById('display').innerHTML;
				action = "Times";
				document.getElementById('display').innerHTML = "";
				}
				if (ActionId == "divide") {
				x = document.getElementById('display').innerHTML;
				action = "Divide";
				document.getElementById('display').innerHTML = "";
				}
			}

			function actionAdd(x,y){
				return parseFloat(x) + parseFloat(y)
			}
			function actionSubstract(x,y){
				return parseFloat(x) - parseFloat(y)
			}
			function actionDivide(x,y){
				return parseFloat(x) / parseFloat(y)
			}
			function actionTimes(x,y){
				return parseFloat(x) * parseFloat(y)
			}
			function buttonIs() {//adds + to display
				y = document.getElementById('display').innerHTML;
				if (action == "Add"){
					document.getElementById('display').innerHTML = actionAdd(x,y);
				}
				if (action == "Substract"){
					document.getElementById('display').innerHTML = actionSubstract(x,y);
				}
				if (action == "Divide"){
					document.getElementById('display').innerHTML = actionDivide(x,y);
				}
				if (action == "Times"){
					document.getElementById('display').innerHTML = actionTimes(x,y);
				}

			}
			function writeVar() {//adds + to display
				document.getElementById('display').innerHTML = x;
			}				
