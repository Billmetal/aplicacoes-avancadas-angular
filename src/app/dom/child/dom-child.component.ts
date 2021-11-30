import { Component, Input, TemplateRef } from "@angular/core";

@Component({
    selector: 'dom-child',
    templateUrl: './dom-child.component.html',
    styleUrls: ['./dom-child.component.scss']
})
export class DomChildComponent {

    @Input() info!: TemplateRef<any>;
    @Input() list!: string[];

    func(item: string){
        console.log(item);
    }
}