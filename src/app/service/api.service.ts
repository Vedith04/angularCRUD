import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }

  postData(data:any){
    return this.http.post("http://localhost:3000/posts",data);
  }
  getData(){
    return this.http.get("http://localhost:3000/posts");
  }
  updateData(data:any,id:any){
    return this.http.put("http://localhost:3000/posts/"+id,data);
  }
  deleteData(id:any){
    return this.http.delete("http://localhost:3000/posts/"+id);
  }

}
