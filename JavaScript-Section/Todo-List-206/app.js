let input = prompt('What would you like to do?')
const todos = ['Clean bed', 'Walk cat', 'Eat mushrooms']

input = input.toLowerCase().trim()

while (input !== 'quit' && input !== 'q') {
  if (input === 'list') {
    console.log('**************')
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`)
    }
    console.log('**************')
  } else if (input === 'new') {
    const newTodo = prompt('Ok, what is the new todo?')

    todos.push(newTodo)

    alert(`'${newTodo}' was added to your list!`)
  } else if (input === 'delete') {
    const index = parseInt(
      Number(prompt('Ok, enter the index of the todo to be deleted...'))
    )

    if (!Number.NaN(index)) {
      const deleted = todos.splice(index, 1)
      alert(`'${deleted}' was deleted from your list!`)
    } else {
      alert('Unknown index!')
    }
  }

  input = prompt('What would you like to do?')
  input = input.toLowerCase().trim()
}

console.log('SUCCESSFULLY QUIT.')
