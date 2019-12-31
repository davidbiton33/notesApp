import { Component, OnInit } from '@angular/core';
// import { CounterServiceService } from '../counter-service.service';
import { HttpClient } from '@angular/common/http';
import { DALService } from '../dal.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(
    // private counterService:CounterServiceService,
     private http:HttpClient,
     private Dal:DALService
     ) {}
    notes = [];
    id = 3;
    //With Service 
    getNotes(){
      this.Dal.getAllNotes().subscribe(data => this.notes = data);
    }

    getById(){
      this.Dal.getByid(3).subscribe(data => console.log(data));
    }
    sendToServer(title,date,time){
      console.log(title);
      this.id ++;
        this.Dal.postNote({id: this.id, title: title, date: date, time: time})
    }

    // Example withput service
    // getAllNotes()
    // {
    //   this.http.get<any>('http://localhost:3000/notes').subscribe(data => this.notes = data)
    // }

  ngOnInit() {
    this.getNotes();
    this.getById();
    // this.getAllNotes();

  }

}
