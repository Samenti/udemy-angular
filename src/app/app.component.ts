import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form') form: NgForm;
  formData = {
    email: '',
    subscription: '',
    password: '',
  };
  submitted = false;

  onSubmit() {
    if (this.form.valid && this.form.touched) {
      this.submitted = true;
      this.formData.email = this.form.value.email;
      this.formData.subscription = this.form.value.subscription;
      this.formData.password = this.form.value.password;
      this.form.reset({ email: '', subscription: 'advanced', password: '' });
    }
  }
}
