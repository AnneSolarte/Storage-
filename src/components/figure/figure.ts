import style from './figure.css';

export interface FigureProps {
    url: string;
    name: string;

}

export default class MyFigure extends HTMLElement {
    url: string = "";      
    name: string = "";             

    static get observedAttributes() {
        return ["url"]
    }

    attributeChangedCallback(prop: keyof FigureProps, _: unknown, value: string) {
        this[prop] = value;
        this.render()
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        <div class="img">
            <p class="img">${this.name}</p>
            <img class="" src="${this.url}">
        </div>
        `
        const cssFig = this.ownerDocument.createElement("style");
        cssFig.innerHTML = style;
        this.shadowRoot?.appendChild(cssFig);  

    }
}

customElements.define('app-figure', MyFigure)
