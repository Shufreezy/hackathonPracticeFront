import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared'

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [EventService]
})
export class EventListComponent implements OnInit {
  events: Array<any>;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getAllEvents().subscribe(
      data => {
        this.events = data;
      },
      error => console.log(error)
    )
  }

}
