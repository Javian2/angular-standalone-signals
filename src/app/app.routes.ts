import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent) },
    { path: 'signals', loadChildren: () => import('./pages/signals/signals-routing.module').then(mod => mod.SignalsRoutingModule) },
    { path: '**', redirectTo: 'home'},
];
