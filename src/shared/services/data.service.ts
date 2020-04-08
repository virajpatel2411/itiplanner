import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { city } from '../Interfaces/iternary';
import { HttpClient } from '@angular/common/http';
import { iti } from 'src/app/Interfaces/iti';

@Injectable({
  providedIn: 'root'
})
export class DataService 
{
  _ItineraryList : AngularFireList<city>;
  url : string = 'http://iti-planner.herokuapp.com/'
  constructor(public db : AngularFireDatabase, private httpClient : HttpClient) {  }
  
  getAll() : AngularFireList<city>  {
    this._ItineraryList = this.db.list('/Itinerary') as AngularFireList<city>;
    //console.log(this._ItineraryList)
    return this._ItineraryList;
  }//unused now

  getpy(a : string) 
  {
     return this.httpClient.get<iti[]>(this.url + a);
  }
}
