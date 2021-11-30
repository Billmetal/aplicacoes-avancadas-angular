import { AfterViewInit, Component, Input, TemplateRef, ViewChild, ViewContainerRef } from "@angular/core";

@Component({
    selector: 'dom',
    templateUrl: './dom.component.html',
    styleUrls: ['./dom.component.scss']
})
export class DomComponent implements AfterViewInit{

    @ViewChild('template',{ static: false }) template!: TemplateRef<any>;
    @ViewChild('container',{ static: false, read: ViewContainerRef }) container!: ViewContainerRef;

    flag!: boolean;

    list = ['A','B','C'];

    value: 'A' | 'B' = 'A';

    constructor(private vcRef: ViewContainerRef){

    }

    ngAfterViewInit(): void {
        // create embedded view aqui para redenrizar info do component apos iniciar view
        
    }

    onClick(){
        this.container.createEmbeddedView(this.template);
    }

    onClickFlag(){
        this.flag = !this.flag;
    }

    toggle(){
        if(this.value === 'A'){
            this.value = 'B';
        } else {
            this.value = 'A';
        }
    }
}