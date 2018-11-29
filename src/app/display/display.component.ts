import { Injectable, OnInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
'

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {
  public response: any

  constructor(private http: HttpClient) { }

  ngOnInit() {  }
  search(select: string, term: string) {
    this.http.get(`https://swapi.co/api/${select}/?search=${term}`)
    .subscribe((response) => {
      this.response = response;
    })
  }
}
