import Component from './Component.js';
import Header from './Header.js';

class App extends Component {

    onRender(dom) {
        const header = new Header();
        const headerDom = header.renderDOM();
        dom.prepend(headerDom);
    }

    renderHTML() {
        return /*HTML*/`
            <div>

                <main>
                    <section id="filter" class="roboto"></section>
                    <section id="animal-list" class="roboto"></section>
                </main>
            </div>
        `;
    }
}

export default App;