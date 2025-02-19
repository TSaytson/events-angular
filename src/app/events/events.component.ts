import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Event } from './event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEvents()
  }

  public events: Event[] = [];
  public filteredEvents: Event[] = [];
  private _topic: string = '';
  private _location: string = '';

  public get topic(): string {
    return this._topic;
  }

  public set topic(value: string) {
    this._topic = value;
    this.filteredEvents = this.topic ? this.filterByTopic(this.topic) : this.events;
  }

  public get location(): string {
    return this._location;
  }

  public set location(value: string) {
    this._location = value;
    this.filteredEvents = this.location ? this.filterByLocation(this.location) : this.events;
  }

  filterByTopic(text: string) {
    text = text.toLocaleLowerCase();
    if (this.location)
      return this.events.filter((event) =>
        event.topic.toLocaleLowerCase().includes(text) &&
        event.location.toLocaleLowerCase().includes(this.location)
      )
    return this.events.filter((event) =>
      event.topic.toLocaleLowerCase().includes(text)
    )
  }
  filterByLocation(text: string) {
    text = text.toLocaleLowerCase();
    if (this.topic)
      return this.events.filter((event) =>
        event.topic.toLocaleLowerCase().includes(this.topic) &&
        event.location.toLocaleLowerCase().includes(text)
      )
    return this.events.filter((event) =>
      event.location.toLocaleLowerCase().indexOf(text) !== -1)
  }

  public getEvents(): void {
    this.http.get<Event[]>('http://localhost:5000/api/events').
      subscribe(
        Response => {
          this.events = Response
          this.filteredEvents = this.events;
        },
        Error => console.log(Error)
      )
  }
}
