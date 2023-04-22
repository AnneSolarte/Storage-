import { traer_cards } from "../services/cards.js";

import MyButton from "../components/button/button.js";
import MyFigure, {FigureProps} from "../components/figure/figure.js";

class Card extends HTMLElement {
    Figures: MyButton[] = [];
    Buttons: MyFigure[] = [];
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        
        }
        
        async connectedCallback() {
            const data = await traer_cards()
            this.render(data);
        }
        
        render(data: any) {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``;

            data.forEach((user: any) => {
                const figure = this.ownerDocument.createElement(
                    "my-figure"
                    ) as MyFigure;
                    figure.setAttribute(FigureProps.name, user.name);
                    figure.setAttribute(FigureProps.url, user.url);
                    const button = this.ownerDocument.createElement("my-button") as MyButton;
                    this.Buttons.push(button);
                    this.Figures.push(figure);
                    });
            }
        }
    }
    
    customElements.define("app-container", Card);