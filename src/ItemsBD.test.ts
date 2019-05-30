import ItemsBD from './ItemsBD'

describe('DADO una nueva lista', () => {
  it('CUANDO no se nombra un topic ENTONCES el resultado es: Topic', () => {
    const lista = new ItemsBD()

    expect(lista.getTopic()).toBe('Topic')
  })
  it('CUANDO se nombra el topic con Tareas ENTONCES el resultado es: Tareas', () => {
    const lista = new ItemsBD('Tareas')

    expect(lista.getTopic()).toBe('Tareas')
  })
  it('CUANDO se añade un nuevo item ENTONCES la longitud del array items es: 1', () => {
    const lista = new ItemsBD()
    lista.addItem('Comprar leche')

    expect(lista.getItems().length).toBe(1)
  })
  it('CUANDO se elimina el item [1] ENTONCES la longitud del array items es: 2', () => {
    const lista = new ItemsBD()
    lista.addItem('Comprar leche')
    lista.addItem('Comprar limón')
    lista.addItem('Comprar cereales')

    lista.deleteItem(1)

    expect(lista.getItems().length).toBe(2)
  })
  it('CUANDO se modifica el item [1] por "buscar tazón" ENTONCES el resultado es: "buscar tazón"', () => {
    const lista = new ItemsBD()
    lista.addItem('Comprar leche')
    lista.addItem('Comprar limón')
    lista.addItem('Comprar cereales')

    lista.editItem(1, 'buscar tazón')

    expect(lista.getItems()[1]).toBe('buscar tazón')
  })
})
