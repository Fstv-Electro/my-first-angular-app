import { Component, OnDestroy, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PasswordInputComponent),
    multi: true,
  }],
})
  
export class PasswordInputComponent implements ControlValueAccessor, OnDestroy{
  passwordControl = new FormControl<string>('');

  private _onTouched = () => {}
  private _onChangeSub!: Subscription;

  ngOnDestroy(): void {
    this._onChangeSub.unsubscribe();
  }

  writeValue(value: any): void {
    if (value) {
      this.passwordControl.setValue(value);
    }
  }

  registerOnChange(fn: () => {}): void {
    this._onChangeSub = this.passwordControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: () => {}): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.passwordControl.disable();
    } else {
      this.passwordControl.enable();
    }
  }

}
