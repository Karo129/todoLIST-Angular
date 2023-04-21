import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { newTodo } from 'src/app/newTodo.interface';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  todos: newTodo[] = [];
 currentStatus = '';

  constructor(private todolistservice: TodoListService, private aroute: ActivatedRoute) {
  }

  ngOnInit() {
    this.todos = this.todolistservice.getTasks();
    this.aroute.params
    .subscribe((status: any) => {
      this.currentStatus = status || '';
    })
  }
 
  counting() {
    return this.todos.filter((todo) => !todo.done).length;
  }

}
