import './styles/index.scss'

const userstack = {
    language: "JavaScripr",
    framework: 'Angular'
}

const user = {
    name: 'Margo',
    age: 31,
    ...userstack
}

console.log(user)







// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
//     return element;
//   }
  
//   document.body.appendChild(component());