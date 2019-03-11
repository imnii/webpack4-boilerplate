export default class Tab {
  state = {
    current: null
  }

  INIT = () => {
    const tabMenuButton = document.querySelectorAll('.tab__menu-button')

    tabMenuButton.forEach((element, i) => {
      tabMenuButton[i].addEventListener("click", () => {
        const tab = event.target.parentNode.parentNode.parentNode
        const menu = event.target.parentNode.parentNode
        const menuItems = Array.prototype.slice.call(menu.children)
        const contentItems = tab.querySelectorAll('.tab__content-item')
        
        // Remove all active class on menu items
        menuItems.forEach((element, index) => {
          element.classList.remove('tab__menu-item--active')
        })

        // Remove all active class on tab content
        contentItems.forEach((element, index) => {
          element.classList.remove('tab__content-item--active')
        })

        // Sets active class to current
        event.target.parentNode.classList.add('tab__menu-item--active')

        // Save the index
        menuItems.forEach((element, index) => {
          if (element.classList.contains('tab__menu-item--active')) {
            this.state.current = index
          }
        })

        // Sets active class to current content
        contentItems[this.state.current].classList.add('tab__content-item--active')
      }, false)
    })
  }
}