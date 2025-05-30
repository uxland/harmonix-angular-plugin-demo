import { Component, ViewEncapsulation } from '@angular/core';
import { format } from 'date-fns';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-main-view',
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="container">
      <h1>My angular Plugin Works</h1>
      <p>Current date: {{ formattedDate }}</p>

      <form [formGroup]="userForm" (ngSubmit)="onSubmit()" class="form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input id="name" type="text" formControlName="name" class="form-control">
          <div *ngIf="userForm.get('name')?.errors?.['required'] && userForm.get('name')?.touched" class="error">
            Name is required
          </div>
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input id="email" type="email" formControlName="email" class="form-control">
          <div *ngIf="userForm.get('email')?.errors?.['required'] && userForm.get('email')?.touched" class="error">
            Email is required
          </div>
          <div *ngIf="userForm.get('email')?.errors?.['email'] && userForm.get('email')?.touched" class="error">
            Please enter a valid email
          </div>
        </div>

        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" formControlName="message" class="form-control"></textarea>
        </div>

        <button type="submit" [disabled]="!userForm.valid" class="submit-btn">Submit</button>
      </form>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
    }
    h1 {
      color: red;
    }
    p {
      margin-top: 10px;
      font-size: 18px;
    }
    .form {
      margin-top: 20px;
      max-width: 500px;
    }
    .form-group {
      margin-bottom: 15px;
    }
    .form-control {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-top: 4px;
    }
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }
    .error {
      color: red;
      font-size: 12px;
      margin-top: 4px;
    }
    .submit-btn {
      background-color: #4CAF50;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .submit-btn:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
    textarea {
      min-height: 100px;
      resize: vertical;
    }
  `],
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MainViewComponent {
  formattedDate = format(new Date(), 'PPPP');
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
      // Here you can handle the form submission
      // For example, send the data to a service
    }
  }
}
