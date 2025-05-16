import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-barra',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './barra.component.html',
  styleUrl: './barra.component.css'
})
export class BarraComponent {

}
