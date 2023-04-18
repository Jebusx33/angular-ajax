import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  paises: any[]=[];
  constructor(private Http: HttpClient){
        this.Http.get('https://restcountries.com/v3.1/all ')
        .subscribe( (resp:any) =>{
          this.paises=resp
          console.log(resp)
        })

  }
}
