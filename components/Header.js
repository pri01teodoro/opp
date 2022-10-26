const header = (color, children) => {
  return (`
    <style>
      .bg{
        color: ${color};       
      }
    </style>
    <nav class="bg">
      ${children}
    </nav>
  `)
}

class Header extends HTMLElement {
  constructor() {
    super();

    console.log(this.innerHTML)

    const {color} = this.attributes

    this.innerHTML = `${header(color.nodeValue, this.innerHTML)}`
  }
}

customElements.define('header-opp', Header)