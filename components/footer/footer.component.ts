import { Component } from '@angular/core';
import { newTodo } from 'src/app/newTodo.interface';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  todos: newTodo[] = [];

  constructor(private todolistservice: TodoListService) {}

  ngOnInit() {
    this.todos = this.todolistservice.getTasks();
  }
 
  counting() {
    return this.todos.filter((todo) => !todo.done).length;
  }

}
