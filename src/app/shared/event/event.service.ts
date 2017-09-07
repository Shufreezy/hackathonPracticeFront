import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class EventService {

  constructor(private http: Http) { }

  getAllEvents(): Observable<any> {
    return this.http.get('http://localhost:8080/get-all-events')
            .map((response: Response) => response.json());
  }
}