import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css']
})
export class FlagsComponent {
  paises: any[]=[];
  constructor(private Http: HttpClient){
        this.Http.get('https://restcountries.com/v3.1/all ')
        .subscribe( (resp:any) =>{
          this.paises=resp
          console.log(resp)
        })

  }
}
