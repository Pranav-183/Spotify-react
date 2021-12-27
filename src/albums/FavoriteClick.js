const FavoriteClick = (e) => {
   let favoriteIconClicked = false
   if (e.target.innerText === 'favorite_border') {
      favoriteIconClicked = true
      e.target.innerText = 'favorite'
      e.target.style.color = 'rgb(0,200,0)'
   } else if (e.target.innerText === 'favorite') {
      favoriteIconClicked = false
      e.target.innerText = 'favorite_border'
      e.target.style.color = null
   }
   
   if (favoriteIconClicked === false) {
      e.target.parentElement.parentElement.addEventListener('mouseover', () => {
         e.target.parentElement.parentElement.lastElementChild.style.marginLeft = '50px'
         e.target.parentElement.style.display = 'block'
         e.target.color = 'rgb(0,200,0)'
      })
      e.target.parentElement.parentElement.addEventListener('mouseleave', () => {
         e.target.parentElement.parentElement.lastElementChild.style.marginLeft = 'auto'
         e.target.parentElement.style.display = 'none'
         e.target.style.color = 'rgb(0,200,0)'
      })
   } else if (favoriteIconClicked === true) {
      e.target.parentElement.parentElement.addEventListener('mouseover', () => {
         e.target.parentElement.parentElement.lastElementChild.style.marginLeft = '50px'
         e.target.parentElement.style.display = 'block'
         e.target.style.color = 'rgb(0,180,0)'
      })
      e.target.parentElement.parentElement.addEventListener('mouseleave', () => {
         e.target.parentElement.parentElement.lastElementChild.style.marginLeft = '50px'
         e.target.parentElement.style.display = 'block'
         e.target.style.color = 'rgb(0,180,0)'
      })
   }
}
 
export default FavoriteClick;