import { Component, inject, NgModule } from '@angular/core';
import { BarraComponent } from "../predeterminados/barra/barra.component";
import { FooterComponent } from "../predeterminados/footer/footer.component";
import { ClimaAPIService } from '../../services/climaAPI/clima-api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { VerClimaComponent } from '../ver-clima/ver-clima.component';


@Component({
  selector: 'app-principal',
  imports: [BarraComponent, FooterComponent, CommonModule, FormsModule, VerClimaComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

private climaAPI = inject(ClimaAPIService);

//variables para guardar y buscar la ciudad

climaData: any;
buscarCiudad: string = '';
isLoading: boolean = false;
forecastData: any;

traerClimaPorCiudad(){
  if(this.buscarCiudad.trim()){
    this.isLoading = true;
    this.climaAPI.getCityBySearch(this.buscarCiudad).subscribe({
    next: (data) => {
      this.climaData = data;
      this.isLoading = false;
      this.traerForcastPorCiudad(this.buscarCiudad);
    },
    error: (err) => console.error('hubo un error: ', err)
  })
  }
}

traerForcastPorCiudad(city: string){
  this.climaAPI.getGraphicBySearch(city).subscribe({
    next: (data) => {
      this.forecastData = data;
      console.log('datos de pronostico: ', data);
    },
    error: (err) => console.error('hubo un error: ', err)
  })
}


}
