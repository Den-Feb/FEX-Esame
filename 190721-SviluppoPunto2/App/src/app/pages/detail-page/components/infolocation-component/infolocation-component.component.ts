import { Component, Input, OnInit } from '@angular/core';
import { DataDetail } from 'src/app/models/data-detail';
import { ProxyServiceService } from 'src/app/services/proxy-service.service';

@Component({
  selector: 'app-infolocation-component',
  templateUrl: './infolocation-component.component.html',
  styleUrls: ['./infolocation-component.component.scss']
})
export class InfolocationComponentComponent implements OnInit {
  // @Input()
  public data: DataDetail;

  constructor(private proxy: ProxyServiceService) { 
    this.data = new DataDetail();
  }

  ngOnInit(): void {
    this.getItems();
  }

  public getItems = () =>{
    this.proxy.getItemById(1).subscribe(item => {
      this.data = item;
    })
  }

}
