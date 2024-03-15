import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface form {
  full_name: string;
  phone: string;
  email: string;
  contact: string;
  company: string;
  company_name: string;
}

@Injectable({
  providedIn: 'any',
})
export class FormService {
  private readonly API_URL =
    'https://industrialapi.actus.io/home/sendcontactemailrequest';

  constructor(private readonly http: HttpClient) {}

  postForm(body: form) {
    return this.http.post(this.API_URL, body);
  }
}
