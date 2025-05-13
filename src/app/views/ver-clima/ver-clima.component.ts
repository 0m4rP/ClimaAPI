import { Component, inject } from '@angular/core';
import { ClimaAPIService } from '../../services/climaAPI/clima-api.service';

@Component({
  selector: 'app-ver-clima',
  imports: [],
  templateUrl: './ver-clima.component.html',
  styleUrl: './ver-clima.component.css'
})
export class VerClimaComponent {

  private apiS = inject(ClimaAPIService);

  //variables
  climaData = '';
  ciudad: string = '';


  traerCiudad(){
    this.apiS.getCityBySearch(this.ciudad).subscribe({
      next: (data) => {
        this.climaData = data;
        console.log(this.climaData);
      },
      error: (err) => console.error('hubo un error: ', err)
    })
  }

}
