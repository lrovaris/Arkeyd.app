import { Injectable, signal } from '@angular/core';
import { UrlService } from '../utils/url.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = signal(
    {
      _id: '',
      name:'',
      backupAddress:'',
      balance:[
        {
          symbol:'USDT',
          value:0
        }
      ],
      inventory:[],
      open_orders:[],
      stake:[]
  }
  )

  constructor(private url: UrlService, private http: HttpClient) { }

  async getUser(wallet:string) {
    return this.http.get(`${this.url.url()}/user/${wallet}`)
  }



}
