import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
	id: number,
	title: string,
	completed: boolean
}

axios.get(url).then( response => {
	const Todo = response.data as Todo
		
	const id = Todo.id
	const title = Todo.title
	const completed = Todo.completed

	logger(id, title, completed)
	
})

const logger = (id: number, title: string, completed: boolean) => {
	
	console.log(`
		The id of the todo is: ${id}
		with a title of: ${title}
		which is completed?: ${completed}
	`)
}