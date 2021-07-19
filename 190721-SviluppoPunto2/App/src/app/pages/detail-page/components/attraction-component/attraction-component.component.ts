import { Component, Input, OnInit } from '@angular/core';
import { Attraction, DataDetail } from 'src/app/models/data-detail';
import { ProxyServiceService } from 'src/app/services/proxy-service.service';

@Component({
  selector: 'app-attraction-component',
  templateUrl: './attraction-component.component.html',
  styleUrls: ['./attraction-component.component.scss']
})
export class AttractionComponentComponent implements OnInit {
  @Input()
  public data: Attraction;
  public open: boolean;

  constructor(private proxy: ProxyServiceService) { 
    this.data = new Attraction();
    this.open = false;
  }

  ngOnInit(): void {
    console.log(this.data.id);
  }
}
