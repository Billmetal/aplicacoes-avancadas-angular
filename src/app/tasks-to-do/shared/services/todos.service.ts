import { Observable, of, throwError } from "rxjs";
import {delay,mergeMap} from "rxjs/operators";
import { Todo } from "../models/todo.model";

export class TodosService {

    getList(page: number): Observable<Todo[]> {
        const start = page * 3;
        return of(this.getEntities().slice(start,start + 3)).pipe(delay(2000));
    }

    toggleDone(id: number): Observable<Todo> {
        let todo ;
        this.getEntities().forEach(item => {
            if(item.id === id){
                todo = item;
                item.done = !item.done;
            }
        });
        return !!todo ? of(todo) : throwError(`Todo com id: ${id} não existe.`);
    }

    create(todo: Partial<Todo>): Observable<Todo>{
        const id = this.getEntities()[0].id + 1;
        const createdAt = new Date();
        const entity: Todo = {
            id,
            createdAt,
            title: `${todo.title}`,
            done: false
        };
        this.setEntities([entity,...this.getEntities()]);
        return of(entity).pipe(delay(2000));
    }

    remove(id: number): Observable<boolean | never> {
        const lenght = this.getEntities().length;
        const filtered = this.getEntities().filter(item => item.id !== id);
        this.setEntities(filtered);
        return of('').pipe(delay(2000),mergeMap(() => 
            filtered.length === lenght ? throwError(`Todo com id: ${id} não existe.`) : of(true)));
    }

    setEntities(todo: Todo[]): void {
        this.getEntities().push(...todo);
    }

    getEntities(): Todo[] {
        return [
            {
                id: 1,
                createdAt: new Date(),
                title: 'sdahfbhdfb',
                done: true
            },
            {
                id: 2,
                createdAt: new Date(),
                title: 'wdhfbiwww',
                done: false
            },
            {
                id: 3,
                createdAt: new Date(),
                title: 'dvkvbkofvb',
                done: false
            },
            {
                id: 4,
                createdAt: new Date(),
                title: 'glhohohenev',
                done: true
            },
            {
                id: 5,
                createdAt: new Date(),
                title: 'vrvruvrvnrv',
                done: false
            },
            {
                id: 6,
                createdAt: new Date(),
                title: 'rrmrbmer',
                done: false
            },
            {
                id: 7,
                createdAt: new Date(),
                title: 'lklkloklk',
                done: true
            },
            {
                id: 8,
                createdAt: new Date(),
                title: 'zzzzzzzzzz',
                done: false
            }
        ];
    }
}
