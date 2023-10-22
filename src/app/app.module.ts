import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { StrengthBarComponent } from './strength-bar/strength-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordInputComponent,
    StrengthBarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
