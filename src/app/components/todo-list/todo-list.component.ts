import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
  todos = [
    {id: 1, description:'Superman', createdOn: new Date(), dueDate: new Date("2022/06/25")},
    {id: 2, description:'Batman', createdOn: new Date(), dueDate: new Date("2022/06/26")},
    {id: 5, description:'BatGirl', createdOn: new Date(), dueDate: new Date("2022/06/27")},
    {id: 3, description:'Robin', createdOn: new Date(), dueDate: new Date("2022/06/28")},
    {id: 4, description:'Flash', createdOn: new Date(), dueDate: new Date("2022/06/30")}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
