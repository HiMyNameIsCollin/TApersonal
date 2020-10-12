
document.addEventListener('DOMContentLoaded', () => {
	const dropDownLink = document.getElementById('dropDownLink')
	const dropDownContainer = document.getElementById('dropDownContainer')
	dropDownIsActive = false

	function closeDropDown(){
		dropDownLink.classList.remove('dropDownActive')
		dropDownContainer.style.display = 'none'
		dropDownIsActive = false
	}


	function activateDropDown(){
		dropDownIsActive = true
		dropDownLink.classList.add('dropDownActive')
		dropDownContainer.style.display = 'block'
		window.addEventListener('click', function closeOnClick(e){
			articleClicked = false
			document.querySelectorAll('.writingArticle').forEach((a, i) => {
				if(e.target === a){
					articleClicked = true
				}
			})
			if(articleClicked === false){
				closeDropDown()
				window.removeEventListener('click', closeOnClick)
			}
		}) 
	}
	dropDownLink.addEventListener('click', (e) => {
		e.stopPropagation()
		if(dropDownIsActive){
			closeDropDown()
		} else {
			activateDropDown()
		}
	})

})


