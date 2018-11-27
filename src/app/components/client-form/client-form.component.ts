import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataPersistenceService } from 'src/app/services/data-persistence/data-persistence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  public form: FormGroup;


  constructor(private dataPersistence: DataPersistenceService, private fb: FormBuilder, private router: Router) { }


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
      this.router.navigate(['/']);

    }
  }


  public forceSubmit() {
    const submit = document.getElementById('submit');
    submit.click();
  }


  ngOnInit() {
    this.initFormControls();
  }

}
