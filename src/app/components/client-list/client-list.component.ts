import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/models/clients/clients.model';
import { DataPersistenceService } from 'src/app/services/data-persistence/data-persistence.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  @Input() clients: Client[];


  constructor(private dataPersistence: DataPersistenceService) { }


  public loadData() {
    this.clients = this.dataPersistence.read('client');
  }


  ngOnInit() {
    this.loadData();
  }


}
