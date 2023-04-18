import { Component } from '@angular/core';
import { PeticionesService } from 'src/app/services/petciones.service';

@Component({
  selector: 'app-resqest',
  templateUrl: './resqest.component.html',
  styleUrls: ['./resqest.component.css'],
  providers:[PeticionesService]
})
export class ResqestComponent {
  users: any[]=[]
  constructor(
    private _peticionesServices:PeticionesService
  ){

  }
 ngOnInit(){

 this.cargarUsuario();
 }
 
cargarUsuario(){
  this._peticionesServices.getUser().subscribe(
    result =>{
        console.log(result)
        this.users = result.data
    },err=>{
      console.log(<any>err)
    }
  )
}

}
