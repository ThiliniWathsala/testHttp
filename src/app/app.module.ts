import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';
import { UserserviceService } from './userservice.service'

@NgModule({
  declarations: [
    AppComponent,
    User1Component,
    User2Component
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
