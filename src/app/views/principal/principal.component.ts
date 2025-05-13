import { Component, inject, NgModule } from '@angular/core';
import { BarraComponent } from "../predeterminados/barra/barra.component";
import { FooterComponent } from "../predeterminados/footer/footer.component";
import { ClimaAPIService } from '../../services/climaAPI/clima-api.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms'; 


@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [BarraComponent, FooterComponent, CommonModule, FormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

private climaAPI = inject(ClimaAPIService);

//variables para guardar y buscar la ciudad

climaData: any;
buscarCiudad: string = '';

traerClimaPorCiudad(){
  this.climaAPI.getCityBySearch(this.buscarCiudad).subscribe({
    next: (data) => {
      this.climaData = data;
      console.log(this.climaData);
    },
    error: (err) => console.error('hubo un error: ', err)
  })
}


}
