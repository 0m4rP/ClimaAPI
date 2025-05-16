import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart, registerables } from 'chart.js';



@Component({
  selector: 'app-ver-clima',
  imports: [],
  templateUrl: './ver-clima.component.html',
  styleUrl: './ver-clima.component.css'
})
export class VerClimaComponent implements OnChanges{

  @Input() forecastData: any;
  public chart: any;

  constructor(){
    Chart.register(...registerables);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.forecastData){
      if(this.chart){
        this.actualizarChart();
      } else{
        this.crearChart();
      }
    }  
  }


  crearChart(){
    const labels = this.getTimeLabels();
    const temps = this.getTemperatureData();
    
    //destruir el grafico anterior si existe
    if(this.chart){
      this.chart.destroy();
    }

    this.chart = new Chart("climaChart", {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Temperatura (°C)',
          data: temps,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2,
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins:{
          title: {
            display: true,
            text: 'pronostico de 5 días'
          },
          tooltip: {
            callbacks: {
              afterLabel: (context) => {
                const index = context.dataIndex;
                return `Condición: ${this.forecastData.list[index].weather[0].description}`;
              }
            }
          }
        },
        scales: {
          y: {
            title: {
              display: true,
              text: 'Temperatura (°C)'
            }
          }
        }
      }
    });
  }


  actualizarChart(){
    this.chart.data.labels = this.getTimeLabels();
    this.chart.data.datasets[0].data = this.getTemperatureData();
    this.chart.update();
  }
  
  private getTimeLabels(): string[]{
    return this.forecastData.list.map((item: any) => {
      const date = new Date(item.dt * 1000);
      return `${date.getDate()}/${date.getMonth() + 1} ${date.getHours()}h`;
    });
  }

  private getTemperatureData(): number[] {
    return this.forecastData.list.map((item: any) => item.main.temp);
  }

  

}
