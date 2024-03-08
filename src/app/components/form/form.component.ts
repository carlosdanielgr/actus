import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgbDropdownModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formInit();
  }

  private formInit() {
    this.form = this.formBuilder.group({
      contact: [''],
      company: [''],
      other: [''],
    });
  }

  onSelectItem(value: string, key: string) {
    this.form.get(key)?.setValue(value);
  }
}
