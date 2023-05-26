const mainBtnsList = document.querySelectorAll('button.main-btns');
const equalBtn = document.querySelector('button.equal-btn');
const h1 = document.querySelector('h1');
const theInput = document.querySelector('input');
const clearBtn = document.querySelector('button.clear-btn');

for ( let i = 0; i < mainBtnsList.length ; i++ ) {
	mainBtnsList[i].addEventListener('click', event => {
		try {	
			event.target.classList.add('vibrate-anim')
			theInput.value +=  event.target.innerHTML;
			h1.innerHTML = eval(theInput.value)
			checkChars(h1)
			console.log(eval(theInput));
		} catch (error) {
			console.log(error)
		}
	})
}

equalBtn.addEventListener('click' , event => {
	// h1.innerHTML = 
	if (eval(theInput.value) != undefined || eval(theInputt.value) != null) {
		event.target.classList.add('vibrate-anim');
		theInput.value = eval(theInput.value);
	}
})


theInput.addEventListener('keyup', e => {
	try {
		console.log(e);
		console.log(eval(e.target.value));
		if (eval(e.target.value) != undefined || eval(e.target.value) != null) {
			h1.innerHTML = eval(e.target.value);
			checkChars(h1);
			if (e.key == 'Enter') {
				theInput.value = eval(theInput.value);
			}
		} else {
			h1.innerHTML = '';
		}
	} catch (error) {
		console.log(error)
	}
})
theInput.addEventListener('keyup', event => {
	for ( let i = 0 ; i < document.querySelectorAll('input').length ; i++ ) {
		console.log(document.querySelectorAll('input')[i])
		document.querySelectorAll('input')[i].classList.add('vibrate-anim');
	}
})

for ( let i = 0 ; i < document.querySelectorAll('*').length ; i++ ) {
		document.querySelectorAll('*')[i].addEventListener('animationend', event => {
			document.querySelectorAll('*')[i].classList.remove('vibrate-anim')
		})
}

clearBtn.addEventListener('click', event => {
	theInput.value = theInput.value.slice(0, -1);
	try {
		if (eval(theInput.value) != undefined || eval(theInput.value) != null) {
			h1.innerHTML = eval(theInput.value);
			checkChars(h1);
			event.target.classList.add('vibrate-anim');
		} else {
			h1.innerHTML = '';
			checkChars(h1);
		}
	} catch (error) {
		console.log(error)
	}
})

function checkChars(element1) {
	if (element1.innerHTML.length > 11) {
		element1.style.fontSize = `1rem`;
	} else {
		element1.style.fontSize = `2rem`;
	}
}