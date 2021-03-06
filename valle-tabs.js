import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

class ValleTab extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: none;
          width: 100%;
        };
      </style>

      <div class="tab" title=[[title]]>
        <slot></slot>
      </div>
    `;
	}
	
	static get properties() {
		return {
			title: String
		}
	}
};

customElements.define('valle-tab', ValleTab);

class ValleTabs extends PolymerElement {
  static get template() {
    return html`
      <style>
       :host {
          display: block;
        };

        .container {
          width: 100%;
        };

        .link {
          display: inline-flex;
          min-width: 90px;
          max-width: 360px;
          height: 48px;
          box-sizing: border-box;
          text-transform: uppercase;
          font-size: 14px;
          color: var(--color-link, #757575);
          padding: 0 16px;
          text-decoration: none;
          align-items: center;
          justify-content: center;
          background-color: var(--background-link, #fff);
          border-bottom: 2px solid transparent;
        };

        .active {
          border-bottom: 2px solid var(--color-link-active, #6200ee);
          color: var(--color-link-active, #6200ee);
          background-color: var(--background-color-link-active, #fff);
        };
      </style>

      <div class="container">
        <div class="links" id="links"></div>
        <slot></slot>
      </div>
    `;
  }
  
  ready() {
    super.ready();
    const allTabs = this.querySelectorAll('valle-tab');
    let visibleTab = allTabs[0];
    let activeLink;

    visibleTab.style.display = 'block';
    
    allTabs.forEach((tab, index) => {
      const link = document.createElement('a');
      link.href = '#';
      link.classList.add('link');
      link.innerText = tab.title;
      if (index === 0) {
        activeLink = link;
        link.classList.add('active');
      }
      link.addEventListener('click', () => {
        activeLink.classList.remove('active');
        link.classList.add('active');
        visibleTab.style.display = 'none';
        tab.style.display = 'block';
        visibleTab = tab;
        activeLink = link;
      })
      this.$.links.appendChild(link);
    })
  }
};

customElements.define('valle-tabs', ValleTabs);
