import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
  randomText:string[] =[
    "I am Batman and there is nothing you can do about it!",
    "Your wish is never going to be my command!",
    "Come and get it!",
    "Nespresso, what else!"
  ];

  randomId: string[] = [
    "79e81f63-c33b-464e-9077-7706c89dbe36",
    "7b92c087-66c3-4a3e-9e43-c5a9792b00c8",
    "dad794cc-19f3-4a97-8e9b-e371ce15eed0",
    "401e04fc-6d8e-415a-8008-31a1e5723bd2"
  ];

  todos: Todo[] = [];

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.retrieveTodos();
  }

  retrieveTodos(): void {
    this.todosService.getAll()
      .subscribe({
        next: (data) => {
          this.todos = data;
        },
        error: (e) => console.error(e)
      });
  }

  updateTodoDescription(): void{
    //fetch todo associated with button

    // compare it with the todo registed in memory
    const data:any = {
      description: this.randomText[Math.floor(Math.random() * 4)],
    };

    const id: string = this.randomId[Math.floor(Math.random() * 4)];
    console.log(id)
    const beforeUpdate: any = this.todos.find(todo => todo.todoId === id);
    console.log(beforeUpdate)
    // update whatever changed (description, dueDate or doneState)
    this.todosService.update(id, data)
      .subscribe({
        next: data => {
          console.log(data);
          this.retrieveTodos();
        },
        error: e => console.error(e)
      });
  }

  addTodo(): void{
    //access input field
    const text = "Whatever you wish to do";

    //fetch content from input field

    //build todo
    const data:Todo = {
      description: this.randomText[Math.floor(Math.random() * 4)],
      createdOn: new Date().toDateString(),
      dueDate: new Date("2022/06/25").toDateString(),
    };

    //send request to api
    this.todosService.create(data)
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (e) => console.error(e)
      });

      this.retrieveTodos();
  }
}
