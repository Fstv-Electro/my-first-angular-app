import { Component, OnInit } from '@angular/core';
import { PasswordStrengthService } from 'src/services/password-strength.service';

@Component({
  selector: 'app-strength-bar',
  templateUrl: './strength-bar.component.html',
  styleUrls: ['./strength-bar.component.css']
})
  
export class StrengthBarComponent implements OnInit{
  constructor(private PasswordStrengthService: PasswordStrengthService) { }
  PasswordStrength = 'empty';

  ngOnInit(): void {
    this.PasswordStrengthService.currentPasswordStrength.subscribe((value) => {
      if (value === 'error') {
        window.alert('validation error')
      } else {
        this.PasswordStrength = value;
      }
    })  
  }
}
