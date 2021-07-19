import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataDetail } from '../models/data-detail';
import { Profile } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class ProxyServiceService {
  private _url: string;

  constructor(private http: HttpClient) { 
    this._url = "http://localhost:3000/data_detail"
  }

  public getItemById = (id: number) =>{
    return this.http.get<DataDetail>(this._url+ "/" +id);
  }
}
