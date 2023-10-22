import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PasswordStrengthService } from 'src/services/password-strength.service';

@Component({
  selector: 'app-strength-bar',
  templateUrl: './strength-bar.component.html',
  styleUrls: ['./strength-bar.component.css']
})
  
export class StrengthBarComponent implements OnInit, OnChanges{
  constructor(private PasswordStrengthService: PasswordStrengthService) { }
  passwordStrength = 'empty';

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.passwordStrength)
  }

  ngOnInit(): void {
    this.PasswordStrengthService.currentPasswordLevel.subscribe((value) => {
      if (value === 'error') {
        window.alert('validation error')
      } else {
        this.passwordStrength = value;
      }
    })  
  }
}
