import AsyncComponent from './AsyncComponent';
let name = 'world' || window.prompt('Enter your name');

document.body.innerHTML = `
<h1>Hello ${name}</h1>
`;

setTimeout(() => {
    document.body.innerHTML = `
    ${new AsyncComponent('Component')}
    ${new AsyncComponent('Component2')}
    `
}, 1000);