import { Injectable } from '@angular/core';
import * as uuid from 'uuid/v1';
import { Client } from 'src/app/models/clients/clients.model';

@Injectable({
  providedIn: 'root'
})
export class DataPersistenceService {


  constructor() { }


  /**
   *
   * @param entity {string}
   * @param data {any}
   */
  public create(entity: string, data: Client): void {

    const $entity = localStorage.getItem(entity);
    let $$entity = [];

    if ($entity) {
      $$entity = [...JSON.parse($entity), {...data, id: uuid()}];
    } else {
      $$entity = [{...data, id: uuid()}];
    }

    localStorage.setItem(entity, JSON.stringify($$entity));
  }


  public read(entity: string, options = null): Client[] {
    return JSON.parse(localStorage.getItem(entity));

  }


  public update(): void {}


  public delete(): void {}

}
