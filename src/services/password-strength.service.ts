import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root',
})
    
export class PasswordStrengthService {
    private passwordStrength = new BehaviorSubject('empty');
    currentPasswordStrength = this.passwordStrength.asObservable();

    constructor() { }
    
    private getPasswordStrength(password: string): any {
        const letterReg = /^[a-zA-Z]+$/;
        const digitsReg = /^\d+$/;
        const symbolsReg = /^[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]+$/;
        const letterDigReg = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;
        const letterSymbolsReg = /^(?=.*?[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])(?=.*?[a-zA-Z])[a-zA-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]+$/;
        const digSymbolsReg = /^(?=.*?\d)(?=.*?[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\d]+$/;
        const letterDigSymbReg = /^(?=.*?\d)(?=.*?[a-zA-Z])(?=.*?[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])[a-zA-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\d]+$/;

        if (password === '') {
            return 'empty';
        }

        if (password.length < 8) {
            return 'short';
        }

        if (letterReg.test(password) || digitsReg.test(password) || symbolsReg.test(password)) {
            return 'easy';
        }
        
        if (letterSymbolsReg.test(password) || letterDigReg.test(password) || digSymbolsReg.test(password)) {
            return 'medium';
        }

        if (letterDigSymbReg.test(password)) {
            return 'strong';
        }

        return 'error';
    };

    updatePassword(password: string) {
        this.passwordStrength.next(this.getPasswordStrength(password));
    };

}