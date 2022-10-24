const header = (color) => {
  return (`
    <style>
      .bg{
        color: ${color};       
      }
    </style>
    <nav class="bg">
      AAAAAAA
    </nav>
  `)
}

class Header extends HTMLElement {
  constructor() {
    super();

    console.log(this.attributes)

    const {color} = this.attributes

    this.innerHTML = `${header(color.nodeValue)}`
  }
}

customElements.define('header-opp', Header)