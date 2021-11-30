import { Directive, DoCheck, Host, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[domSwitch]'
})
export class DomSwitchDirective {

    @Input('domSwitch') switchState: any;
}


@Directive({
    selector: '[domSwitchCase]'
})
export class DomSwitchCaseDirective implements DoCheck{

    @Input('domSwitchCase') caseValue: any;

    constructor(@Host() private domSwitch: DomSwitchDirective,
                private vcRef: ViewContainerRef,
                private template: TemplateRef<any>){

    }

    ngDoCheck(): void {
        if(this.domSwitch.switchState === this.caseValue){
            this.vcRef.createEmbeddedView(this.template);
        } else {
            this.vcRef.clear();
        }
    }
}