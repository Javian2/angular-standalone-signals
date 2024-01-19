import { NgModule } from "@angular/core";
import { SignalsComponent } from "./container/signals.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        SignalsComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: []
})

export class SignalsModule { }