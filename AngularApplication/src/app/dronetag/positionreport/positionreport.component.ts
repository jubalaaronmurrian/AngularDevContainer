import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-positionreport',
  standalone: true,
  imports: [DatePipe],
  providers:[HttpClient],
  templateUrl: './positionreport.component.html',
  styleUrl: './positionreport.component.css'
})
export class PositionreportComponent {

  positionreports:any;

  constructor(private httpClient:HttpClient){
    const url = environment.apiUrl + environment.positionReport;
    httpClient.get(url).subscribe(resp=>{
      this.positionreports = resp;
    });
  }

}
