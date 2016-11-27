import jquery from 'jquery';

let id = 0;

export default class AsyncComponent {

    constructor(name, params) {
        this.id = `as-comp-${id++}`;
        this.name = name;

        require.ensure([], require  => {
            const Component = require(`./components/${name}`).default;
            const element = jquery(`#${this.id}`).replaceWith(
                jquery(new Component(params).render())
            );
        });
    }

    toString() {
        return this.render();
    }

    render() {
        return `<div id="${this.id}"></div>`;
    }
}