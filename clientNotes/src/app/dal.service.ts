import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DALService {

  readonly apiUrl = 'http://localhost:3000/notes';
  constructor(private http:HttpClient) {}

  // Get All

  getAllNotes() : any
  {
    return this.http.get(this.apiUrl);
  }


  getByid(id):any
  {
    return this.http.get(`${this.apiUrl}/${id}`)
  }

  postNote(obj){
     this.http.post(this.apiUrl, obj);
  }


}
