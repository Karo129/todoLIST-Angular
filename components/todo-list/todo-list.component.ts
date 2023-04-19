import { Component, OnInit } from '@angular/core'
import { newTodo } from 'src/app/newTodo.interface'
import { TodoListService } from 'src/app/services/todo-list.service'

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
	newTodo: string = ''
	todos: newTodo[] = []
	listVisible: boolean = false

	constructor(private todolistservice: TodoListService) {}

	ngOnInit() {
		this.todos = this.todolistservice.getTasks()
	}

	addTodo() {
		const todo: newTodo = {
			title: this.newTodo,
			done: false,
			editing: false,
		}
		this.todolistservice.addTask(todo)
		this.newTodo = ''
		this.listVisible = true
	}

	toggleTodo(todo: any) {
		this.todolistservice.toggleTodo(todo)
	}

	toggleAll() {
		this.todolistservice.toggleAll()
	}

	clearCompleted() {
		this.todos = this.todos.filter(todo => !todo.done)
	}
}
