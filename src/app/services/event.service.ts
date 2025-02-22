import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../models/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  baseUrl = 'http://localhost:5000/api/events';


  constructor(private http: HttpClient) { }


  public getEvents(){
    return this.http.get<Event[]>(this.baseUrl)
  }

  public getEventsByTopic(topic: string){
    return this.http.get<Event[]>(`${this.baseUrl}/topic/${topic}`)
  }

  public getEventById(id: number){
    return this.http.get<Event>(`${this.baseUrl}/${id}`)
  }
}
