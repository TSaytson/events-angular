import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EMPTY, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://localhost:5000/api/events';

  constructor(private http:HttpClient){}

  errorHandler(e:Error):Observable<Error>{
    console.log(e.message);
    return EMPTY;
  }

  read(): Observable<Event[]>{
    return this.http.get<Event[]>(this.baseUrl).pipe(
    )
  }
}