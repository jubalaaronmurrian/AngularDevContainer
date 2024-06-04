import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PositionreportComponent } from './dronetag/positionreport/positionreport.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PositionreportComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularApplication';
}
