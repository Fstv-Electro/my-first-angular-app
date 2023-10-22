import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { PasswordStrengthService } from 'src/services/password-strength.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  passwordControl = new FormControl<string>('');

  constructor(private passwordStrengthService: PasswordStrengthService) { }
  
  ngOnInit() {
    this.passwordControl.valueChanges.subscribe((value) => {
      if (value) {
        this.passwordStrengthService.updatePassword(value);
      } else {
        this.passwordStrengthService.updatePassword('');
      }
    });
  }

}
