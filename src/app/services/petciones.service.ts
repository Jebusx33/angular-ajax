import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class PeticionesService {
    public url:string;
    constructor(private _Http: HttpClient) {
        this.url="https://reqres.in/"
    }
    
    public getUser(): Observable<any>{
        return this._Http.get(this.url+'api/users/');
    }
    
}