let openTab
let buttonNumber = (n) => {
  openTab = n
}
(() => {
  const application = Stimulus.Application.start()

  application.register('tab', class extends Stimulus.Controller {
    static get targets() {
      return [ 'buttons', 'contents', 'value' ]
    }

      get buttons() {
          return this.buttonsTargets
        }
  
      get contents() {
          return this.contentsTargets
        }
      
      tabChange() {
        let activeTab
        for (let i = 0; i < this.buttons.length; i++) {
          if (this.buttons[i].classList.contains('-active') === true) {
           activeTab = i
          }
        }
        this.buttons[activeTab].classList.remove('-active')
        this.contents[activeTab].classList.add('u-d-none')
        for (let j = 0; j < this.buttons.length; j++) {
          if (j !== openTab) {
            this.buttons[j].classList.remove('-active')
            this.contents[j].classList.add('u-d-none')
          } else {
            this.buttons[openTab].classList.add('-active')
            this.contents[openTab].classList.remove('u-d-none')
          }
        }
      }
  })
})()
