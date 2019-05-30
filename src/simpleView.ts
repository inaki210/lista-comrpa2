import TopicBD from './ItemsBD'

const lista = new TopicBD('Estudiar')

lista.addItem('React')
lista.addItem('ES6')

const a = lista.getItems()

a.forEach(element => {
  console.log(element)
})

console.log('FIN')
