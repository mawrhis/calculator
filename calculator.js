			
			var action = 0 // type of action (+-/*)
				chain = 0//chain of numbers currently hidden in memory, should be replaced by one number (chain already calculated)
				IsPressed = 0
				sign = 0

			function erase() {//if button is pressed display is erased
				document.getElementById('display').innerHTML = 0;
				var action = 0;
				chain = 0;
				console.log ('action=' + action);
			    console.log ('chain=' + chain);
			}

			function button(ele){
				var id = ele.id;
				if (document.getElementById('display').innerHTML == 0){
					document.getElementById('display').innerHTML = "";
				}
				if (sign != 0){
					document.getElementById('display').innerHTML = "";
				}
				document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById( id ).innerHTML;
				sign = 0;
			}
			


			function buttonAction(ele) { //
				var ActionId = ele.id;
					

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

				console.log ('chain1=' + chain);
				if (chain == 0){
					chain = document.getElementById('display').innerHTML + sign;
				}else{
					chain = chain + document.getElementById('display').innerHTML;
					document.getElementById('display').innerHTML = Math.ceil(eval(chain) * 1000000000) / 1000000000;
					chain = document.getElementById('display').innerHTML;
					chain = chain + sign;
				}
				
				console.log ('chain2=' + chain);
			}
			
			
			function buttonIs() {//adds + to display
				chain = chain + document.getElementById('display').innerHTML;
				document.getElementById('display').innerHTML = Math.ceil(eval(chain) * 1000000000) / 1000000000;
				chain = document.getElementById('display').innerHTML;
				chain = 0;				
			}
// omezeni poctu znaku na displeji
/*
			var i;
			var divs = document.getElementsByTagName('div');
			for(i=0;i<divs.length;i++) {
  				if(divs[i].className == 'myclass') {
   					 divs[i].innerHTML = divs[i].innerHTML.substring(0,200);
  				}
			}*/