import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.scss']
})
export class ClientItemComponent implements OnInit {

  client: any;
  currentClientId: number | any; 
  constructor(private clientService: ClientService, private route: ActivatedRoute) { 

    this.currentClientId = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {

    this.clientService.getClientById(this.currentClientId).subscribe(data=>this.client=data);
  }

}
