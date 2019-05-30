import React from 'react'
//import logo from './logo.svg'
import './App.css'
import TopicList from './TopicList'
import TopicBD from './ItemsBD'

/*const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

const App: React.FC = () => {
  return <TopicList />
}

export default App

/* -- Gestión de items -- */
/* inicialización */
const lista1 = new TopicBD('-Estudiar-')
console.log('topic: ' + lista1.getTopic())
/* añadir items */
lista1.addItem('React')
lista1.addItem('ES6')
/* recorrer items */
lista1.getItems().forEach(element => {
  console.log('item:  ' + element)
})

const lista2 = new TopicBD('-Más-')
console.log('topic: ' + lista2.getTopic())

lista2.addItem('A1')
lista2.addItem('B2')
lista2.addItem('C3')

lista2.getItems().forEach(element => {
  console.log('item:  ' + element)
})

/* edit item */
console.log('--Edit--')
lista2.editItem(1, 'D4')
lista2.getItems().forEach(element => {
  console.log('item:  ' + element)
})

/* delete item */
console.log('--Delete--')
lista2.deleteItem(0)
lista2.getItems().forEach(element => {
  console.log('item:  ' + element)
})

console.log('---FIN---')
