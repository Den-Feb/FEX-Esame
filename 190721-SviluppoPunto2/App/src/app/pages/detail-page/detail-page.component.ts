import { Component, OnInit } from '@angular/core';
import { DataDetail } from 'src/app/models/data-detail';
import { ProxyServiceService } from 'src/app/services/proxy-service.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  public data: DataDetail;
  public id_location: number;

  constructor(private proxy: ProxyServiceService) { 
    this.data = new DataDetail();
    this.id_location = 1;
  }

  ngOnInit(): void {
    // this.getItems();
  }

  public getItems = () =>{
    this.proxy.getItemById(1).subscribe(item => {
      this.data = item;
    })
  }

}
