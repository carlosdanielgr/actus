import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgbDropdownModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly formService: FormService
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  private formInit() {
    this.form = this.formBuilder.group({
      full_name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required]],
      company: ['', [Validators.required]],
      company_name: ['', [Validators.required]],
    });
  }

  onSelectItem(value: string, key: string) {
    if (key === 'company') this.form.get('other')?.setValue('');
    this.form.get(key)?.setValue(value);
  }

  setOther({ value }: any) {
    this.form.get('company')?.setValue(value);
  }

  onPostForm() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.formService.postForm(this.form.value).subscribe({
      next: () => {
        this.form.reset();
      },
    });
  }

  get companyError() {
    return (
      this.form.get('company')?.touched && this.form.get('company')?.invalid
    );
  }

  get contactError() {
    return (
      this.form.get('contact')?.touched && this.form.get('contact')?.invalid
    );
  }
}
