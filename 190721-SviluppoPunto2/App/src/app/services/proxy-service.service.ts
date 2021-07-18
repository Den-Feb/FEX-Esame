import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class ProxyServiceService {
  private _url: string;

  constructor(private http: HttpClient) { 
    this._url = "profile"
  }

  public getAllItems = () =>{
    return this.http.get<Profile>(this._url);
  }
}
