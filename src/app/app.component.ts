import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { DataObj } from './data.model';
import {ApiService} from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingBlog';

  constructor(private dataService:ApiService){}
  dataForm=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl('')
  });
  dataObj:DataObj=new DataObj();

  postDetails(){
    this.dataObj.name=this.dataForm.value.name;
    this.dataObj.email=this.dataForm.value.email;
    this.dataObj.phone=this.dataForm.value.phone;

    this.dataService.postData(this.dataObj).subscribe((item)=>{
      console.log(item);
      let ref=document.getElementById('cancel');
      ref?.click();
      this.dataForm.reset();
    });
    location.reload();
  }
  
}
