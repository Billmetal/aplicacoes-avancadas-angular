import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'jv-ahead',
    templateUrl: './ahead.component.html',
    styleUrls: ['./ahead.component.scss']
})
export class AheadComponent {

    form = new FormGroup({
        search: new FormControl({ value: '', disabled: true })
    });

    constructor(){

    }

    get search(): string {
        return this.form.value.search;
    }

    get isSearchTouched(): boolean {
        return this.form.controls['search'].touched;
    }
}