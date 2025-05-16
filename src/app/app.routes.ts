import { Routes } from '@angular/router';
import { PrincipalComponent } from './views/principal/principal.component';
import { VerClimaComponent } from './views/ver-clima/ver-clima.component';

export const routes: Routes = [
    {path: '', redirectTo: 'principal', pathMatch: 'full'},
    {path: 'principal', component: PrincipalComponent},
    {path: '**', redirectTo: 'principal'}
];
