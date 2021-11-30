import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Todo } from "src/app/tasks-to-do/shared/models/todo.model";
import { TodosService } from "src/app/tasks-to-do/shared/services/todos.service";
import { ListService } from "../services/list.service";

@Component({
    selector: 'jv-create-todo',
    templateUrl: './create-todo.component.html',
    styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {

    @Output() created = new EventEmitter;

    titleControl = new FormControl('');

    list!: Todo[];

    constructor(private todosService: TodosService,
        private listService: ListService){
            listService.list$.subscribe(list => this.list = list);
    }

    save(){
        this.listService.create(this.titleControl.value);
    }
}