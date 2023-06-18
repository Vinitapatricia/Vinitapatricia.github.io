document.addEventListener('DOMContentLoaded', () =>{
	document.querySelector('.viota').addEventListener('click',function(){

		document.querySelector('.viota').classList.toggle('clicked')

	})

    document.querySelector('.viota').addEventListener("click", controlAnimation);

    document.querySelector('.mental').addEventListener('click',function(){

		document.querySelector('.mental').classList.toggle('clicked')

	})

    document.querySelector('.mental').addEventListener("click", controlAnimation);

})

function controlAnimation() {
	const menu = document.querySelector('.gudang');
	menu.classList.remove('animate');
	setTimeout(() => {
	  menu.classList.add('animate');
	}, 0);
  }