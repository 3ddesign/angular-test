import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncValidator, FormControl } from '@angular/forms';


@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private httpClient: HttpClient) {}
  validate = (control: FormControl) => {
    const { value } = control;


    return this.httpClient.post<any>('https://api.angular-email.com/auth/username', {
        username: value
    });
  }
}
