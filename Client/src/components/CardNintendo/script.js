class GameboyCartridgeHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
      :host {
        --header-patch-gradient:
          linear-gradient(
            var(--cartridge-color) 0 15%,
            transparent 15% 75%,
            var(--cartridge-color) 75%
          ),
          linear-gradient(
            90deg,
            transparent 0 1%,
            #444 1% 5%,
            #000 50%,
            #444 95% 99%,
            transparent 99%
          );

        --header-gaps-gradient:
          repeating-linear-gradient(
            var(--cartridge-color) 0 8%,
            transparent 8% 16%
          ),
          linear-gradient(
            #222 0% 11%,
            transparent 11% 19%,
            #222 24% 26%,
            transparent 26% 40%,
            #222 40% 42%,
            transparent 43% 52%,
            #222 56% 58%,
            transparent 58% 64%,
            #222 74% 70%,
            transparent 70%
          );

        display: inline-flex;
        justify-content: center;
        width: 100%;
      }

      .cartridge-header {
        width: calc(var(--width) * 1);
        height: calc(var(--height) * 0.25);
        background: var(--header-patch-gradient);
        border-radius: 0 var(--border-round) 0 0;
        display: flex;
        align-items: center;
      }

      .cartridge-header-overlay {
        width: 100%;
        height: 75%;
        background: var(--header-gaps-gradient);

        display: flex;
        justify-content: center;
      }

      .cartridge-brand {
        width: 75%;
        height: 95%;
        background: #444;
        background: linear-gradient(#444 5%, #777 85%);
        box-shadow:
          0 5px 15px 10px #4448 inset,
          0 -1px 0 1px #ddd inset,
          0 1px 2px 2px #222 inset;
        border: 5px solid var(--cartridge-color);
        border-radius: 75px;
        transform: translate(0, -8%);

        display: flex;
        justify-content: center;
        align-items: center;

        color: var(--cartridge-color);
        text-shadow: 1px 2px 1px #0005;
      }

      .cartridge-brand .brand {
        font-family: Pretendo;
        font-size: 0.55em;
        letter-spacing: 0px;
      }

      .cartridge-brand .model {
        font-family: "Gill Sans MT Pro";
        letter-spacing: -3px;
        font-size: 0.9em;
      }

      .cartridge-brand .sign {
        font-family: Lato;
        font-size: 0.3em;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>${GameboyCartridgeHeader.styles}</style>
    <header>
      <div class="cartridge-header">
        <div class="cartridge-header-overlay">
          <div class="cartridge-brand">
            <div class="text-line">
              <span class="brand">Games</span>
              <span class="model">FOREVER</span>
              <span class="sign">ZZ</span>
            </div>
          </div>
        </div>
      </div>
    </header>`;
  }
}

customElements.define("gameboy-cartridge-header", GameboyCartridgeHeader);

class GameboyCartridge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
      :host {
        --width: 225px;
        --height: 250px;
        --cartridge-color: #8c8c8c;
        --border-round: 5px;

        width: var(--width);
        height: var(--height);

        filter: drop-shadow(0 0 4px #000);
      }

      .cartridge-top {
        width: calc(var(--width) * 0.9);
        height: calc(var(--height) * 0.05);
        background: var(--cartridge-color);
        border-radius: var(--border-round) var(--border-round) 0 0;
        box-shadow: 0 -2px 0px #aaa;
      }

      .cartridge-body {
        width: var(--width);
        height: calc(var(--height) * 0.7);
        background: var(--cartridge-color);
        border-radius: 0 0 var(--border-round) var(--border-round);

        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        background-image: linear-gradient(transparent, #666);
      }

      .cartridge-label-container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .cartridge-end {
        width: 5%;
        height: 75%;
        background: #5d5d5d;
        border-top: 3px solid #444;
      }

      .cartridge-end:first-child {
        border-radius: 0 0 0 var(--border-round);
      }

      .cartridge-end:last-child {
        border-radius: 0 0 var(--border-round) 0;
      }

      .cartridge-gap {
        width: calc(var(--width) * 0.74);
        height: calc(var(--height) * 0.59);
        background: #666;
        background: linear-gradient(#666, #555);
        border-radius: var(--border-round);

        display: flex;
        justify-content: center;
        align-items: center;

        border-top: 2px solid #444;
        border-bottom: 2px solid #aaa;
      }

      .arrow-down {
        border-top: 30px solid #555;
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        border-radius: 10px;
        margin: 10px 0 14px 0;
        filter:
          drop-shadow(0 1px 0 #999)
          drop-shadow(0 -1px 0 #444);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>${GameboyCartridge.styles}</style>
    <div class="container">
      <div class="cartridge-top"></div>
      <gameboy-cartridge-header></gameboy-cartridge-header>
      <div class="cartridge-body">
        <div class="cartridge-end"></div>
        <div class="cartridge-label-container">
          <div class="cartridge-gap">
            <gameboy-cartridge-label></gameboy-cartridge-label>
          </div>
          <div class="arrow-down"></div>
        </div>
        <div class="cartridge-end"></div>
      </div>
    </div>`;
  }
}

customElements.define("gameboy-cartridge", GameboyCartridge);
