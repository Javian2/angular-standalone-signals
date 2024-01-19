import { RouterModule, Routes } from "@angular/router";
import { SignalsComponent } from "./container/signals.component";
import { NgModule } from "@angular/core";

export const routes: Routes = [
    { path: '', component: SignalsComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SignalsRoutingModule {  }