import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Books } from './models/book.model';


const baseURL='http://localhost:8080/api/books'
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Books[]>{
    return this.http.get<Books[]>(baseURL);
  }

  get(id:any):Observable<Books>{
    return this.http.get<Books>(`${baseURL}/${id}`);
  }

  create(data:any):Observable<any>{
    return this.http.post(baseURL,data);
  }

  update(id:any,data:any):Observable<any>{
    return this.http.put(`${baseURL}/${id}`,data);
  }

  delete(id:any):Observable<any>{
    return this.http.delete(`${baseURL}/${id}`);
  }

  deleteAll():Observable<any>{
    return this.http.delete(baseURL);
  }

  findByTitle(title:any){
    //later add search
  }

}
