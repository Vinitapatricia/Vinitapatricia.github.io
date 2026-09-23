document.addEventListener('DOMContentLoaded', () =>{
	document.querySelector('.gudang').addEventListener('click',function(){

		document.querySelector('.gudang').classList.toggle('clicked')

	})

	document.querySelector('.gudang').addEventListener("click", controlAnimation);


    document.querySelector('.game').addEventListener('click',function(){

		document.querySelector('.game').classList.toggle('clicked')

	})

	document.querySelector('.game').addEventListener("click", controlAnimation);

    document.querySelector('.tic').addEventListener('click',function(){

		document.querySelector('.tic').classList.toggle('clicked')

	})

	document.querySelector('.tic').addEventListener("click", controlAnimation);
})

function controlAnimation() {
	const menu = document.querySelector('.gudang');
	menu.classList.remove('animate');
	setTimeout(() => {
	  menu.classList.add('animate');
	}, 0);
  }