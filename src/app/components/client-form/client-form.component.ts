import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataPersistenceService } from 'src/app/services/data-persistence/data-persistence.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/clients/clients.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  private type: string;
  private client: Client;
  public form: FormGroup;


  constructor(
    private dataPersistence: DataPersistenceService,
    private fb: FormBuilder,
    private router: Router,
    private active: ActivatedRoute
  ) { }


  private initFormControls(): void {

    if (this.type === 'edit') {
      const id = this.active.snapshot.params['id'];
      this.client = this.dataPersistence.get('client', id);

    }

    this.form = this.fb.group({
      name: [this.client ? this.client.name : '', Validators.required],
      age: [this.client ? this.client.age : '', Validators.required],
      cpf: [this.client ? this.client.cpf : '', Validators.required],
      phone: [this.client ? this.client.phone : '', Validators.required],
      email: [this.client ? this.client.email : '', Validators.required]
    });
  }


  public set() {
    if (this.form.valid) {
      let data;

      data = this.form.value;

      if (this.type === 'edit') {
        data = {
          ...data,
          id: this.client.id
        };
      }

      this.dataPersistence[this.type === 'edit' ? 'update' : 'create']('client', data);
      this.router.navigate(['/']);

    }
  }


  public forceSubmit() {
    const submit = document.getElementById('submit');
    submit.click();
  }


  ngOnInit() {
    this.type = this.active.snapshot.data['type'];
    this.initFormControls();
  }

}
