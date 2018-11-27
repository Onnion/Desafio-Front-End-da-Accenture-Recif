import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { MatInputModule, MatIconModule, MatButtonModule, MatCardModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalDirective } from '../helpers/directives/modal/modal.directive';
import { FormBuilderValidators } from '../helpers/validators';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  declarations: [ClientListComponent, ClientFormComponent, ClientViewComponent, ModalDirective, ConfirmComponent ],
  providers: [ FormBuilderValidators ]
})
export class ComponentsModule { }
