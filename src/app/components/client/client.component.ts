import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  clients: any = [];
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {

    this.clientService.getClients().subscribe(response => this.clients=response);
  }

}
