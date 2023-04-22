export default class Button extends HTMLElement {
    button?: HTMLElement;

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        
  }


    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';

        const button = this.ownerDocument.createElement('button');
        button.innerText = `Agregar`
        button.addEventListener('click',() =>{
            button.innerText = "Agregado";
        })
        this.shadowRoot?.appendChild(button);
    }
}

customElements.define('my-button',Button);