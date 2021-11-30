import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Todo } from "src/app/tasks-to-do/shared/models/todo.model";
import { TodosService } from "src/app/tasks-to-do/shared/services/todos.service";

@Injectable()
export class ListService {

    private listSubject = new BehaviorSubject<Todo[]>([]);
    page = 0;

    constructor(private todosService: TodosService){

    }

    get list$(): Observable<Todo[]> {
        return this.listSubject.asObservable();
    }

    set list(value: Todo[]){
        this.listSubject.next(value);
    }

    create(title: string) {
        this.todosService.create({ title })
            .subscribe(todo => this.list = [todo, ...this.listSubject.value]);
    }

    getList(page: number) {
        this.todosService.getList(page).subscribe(list => {
            if(page === 0){
                this.list = list;
            } else {
                this.list = [...this.listSubject.value, ...list];
            }
        });
    }
    
    // private _list!: Todo[];
    // page = 0;

    // get list(): Todo[] {
    //     return this._list;
    // }

    // set list(value: Todo[]){
    //     this._list = value;
    // }

}