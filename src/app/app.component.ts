import { Component, OnInit } from '@angular/core';
import { DataPersistenceService } from './services/data-persistence/data-persistence.service';
import { Client } from './models/clients/clients.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public clients: Client[];
  public form: FormGroup;


  constructor(private dataPersistence: DataPersistenceService, private fb: FormBuilder) {}


  private initFormControls(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      cpf: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required]
    });
  }


  public set() {
    if (this.form.valid) {
    this.dataPersistence.create('client', this.form.value);

    }
  }


  public get() {
    this.clients = this.dataPersistence.read('client');
    console.log(this.clients[0]);
  }


  public forceSubmit() {
    const submit = document.getElementById('submit');
    submit.click();
  }


  ngOnInit() {
    this.initFormControls();
    this.get();
  }

}
