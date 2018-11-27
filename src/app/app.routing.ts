import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientListComponent } from './components/client-list/client-list.component';

const routes: Routes = [

  { path: '', component: ClientListComponent
 },
  { path: 'cadastrar', component: ClientFormComponent },
  // { path: 'midia/noticias', component: MediaComponent, data: {type: 'news'} },
  // { path: 'midia/videos', component: MediaComponent, data: {type: 'videos'} },
  // { path: 'midia/decisoes', component: MediaComponent, data: {type: 'decisions'} },
  // { path: 'midia/artigos', component: MediaComponent, data: {type: 'articles'} },
  // { path: 'midia/:type/:id/:title', component: MediaComponent },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
