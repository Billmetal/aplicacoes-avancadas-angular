import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[domFor]'
})
export class DomForDirective implements OnInit{

    @Input('domForFrom') list!: string[];

    constructor(private templateb: TemplateRef<any>,
                private vcRef: ViewContainerRef){

    }

    ngOnInit(): void {
        this.list.forEach((item,index) => {
            this.vcRef.createEmbeddedView(this.templateb, { $implicit: item, index });
        });
    }
}