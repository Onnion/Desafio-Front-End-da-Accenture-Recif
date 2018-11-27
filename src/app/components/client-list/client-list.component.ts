import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/models/clients/clients.model';
import { DataPersistenceService } from 'src/app/services/data-persistence/data-persistence.service';
import { listObjShow, fade } from 'src/app/helpers/animations/animations.helper';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  animations: [listObjShow, fade]
})
export class ClientListComponent implements OnInit {

  public client: Client;

  @Input() clients: Client[];


  constructor(private dataPersistence: DataPersistenceService) { }


  public loadData() {
    this.clients = this.dataPersistence.read('client');
  }


  public selectDelete(client: Client) {
    this.client = client;
  }


  public delete() {
    this.dataPersistence.delete('client', this.client);
    this.cancel();
  }


  public cancel() {
    this.client = null;
  }


  ngOnInit() {
    this.loadData();
  }


}
