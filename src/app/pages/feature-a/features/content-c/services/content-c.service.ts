import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ContentCService {

    getUser(): Observable<any> {
        return new Observable((subscriber) => {
            subscriber.next({
                firstName: 'Jhon',
                lastName: 'Doe'
            });
        });
    }
}