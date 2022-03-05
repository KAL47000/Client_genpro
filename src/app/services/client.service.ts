import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url: string = environment.api;
  constructor(private http: HttpClient) { }

  getClients(){
    return this.http.get(this.url + 'clients');
  }

  getClientById(id: number){

    return this.http.get(this.url + 'clients/' + id);
  }
}
