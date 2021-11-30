import { Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[domIf]'
})
export class DomIfDirective {

    private embedded!: EmbeddedViewRef<any>;

    constructor(private vcRef: ViewContainerRef,
                private template: TemplateRef<any>){

    }

    @Input('domIf') set flag(value: boolean){
        if(value){
            this.embedded = this.vcRef.createEmbeddedView(this.template);
        } else if(!!this.embedded){
            this.embedded.destroy();
        }
    }
}