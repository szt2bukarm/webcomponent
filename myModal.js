
class myModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .modal {
                    position: relative;
                    background-color: white;
                    padding: 40px;
                    border-radius: 5px;
                    width:50%;
                    height:400px;
                }
                .close{
                    position:absolute;
                    top: -10px;
                    right:-10px;
                    border-radius:50%;
                    border:0;
                    background-color:#000;
                    color:#fff;
                    width:35px;
                    height:35px;
                    cursor:pointer;
                }
                .text{
                    overflow-y: auto;
                    height:100%
                }

            </style>
            <div class="container">
                <div class="modal">
                    <p class="text"><slot></slot></p>
                    <button class="close">X</button>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        this.render();
        this.shadowRoot.querySelector(".close").addEventListener("click", () => {this.classList.remove('open')});
    }
}


customElements.define("my-modal", myModal);

  