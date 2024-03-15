class CommonHeader extends HTMLElement {
  
    connectedCallback(){
        this.innerHTML = `
        <div class="sidebar">
        <button onclick="window.location.href='./';" class="navbutton">
            Home
        </button>
        <br>
        <button onclick="window.location.href='./Mt_Nebo.html';" class="navbutton">
            Mt. Nebo
        </button>
        <br>
        <button onclick="window.location.href='./Mt_Timpanogos.html';" class="navbutton">
            Mt. Timpanogos
        </button>
        <br>
        <button onclick="window.location.href='./Lone_Peak.html';" class="navbutton">
            Lone Peak
        </button>
        <br>
        <button onclick="window.location.href='./Mt_Olympus.html';" class="navbutton">
            Mt. Olympus
        </button>
        <br>
        <button onclick="window.location.href='./Grandeur_Peak.html';" class="navbutton">
            Grandeur Peak
        </button>
        <br>
        <button onclick="window.location.href='./Mt_Ben_Lomond.html';" class="navbutton">
            Mt. Ben Lomond
        </button>
    </div>`
        }
    }
    customElements.define('common-header', CommonHeader)