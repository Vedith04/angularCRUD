import { Component, OnInit} from '@angular/core';
import { DataObj } from 'src/app/data.model';
import {ApiService} from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService:ApiService) { }
  ngOnInit(): void {
    this.getDetails();
  }
  data:any=[];

  checkEmpty(){
    return this.data.length>0;
  }
  getDetails(){
    this.dataService.getData().subscribe((res)=>{
      this.data=res;
    })
    console.log(this.data);
  }
  
  deleteDetails(item:any){
    this.dataService.deleteData(item.id).subscribe((res)=>{
      this.data=res;
      this.getDetails();
    })
  }

}
