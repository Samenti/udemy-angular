import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  unallowedNames = ['Test'];

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(
        null,
        [
          Validators.required,
          // this.incorrectNameValidator.bind(this)
        ],
        this.incorrectNameAsyncValidator.bind(this)
      ),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Stable'),
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  incorrectNameValidator(control: FormControl): ValidationErrors | null {
    if (this.unallowedNames.includes(control.value)) {
      return { incorrect: true };
    }
    return null;
  }

  incorrectNameAsyncValidator(
    control: FormControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.unallowedNames.includes(control.value)) {
          resolve({ incorrect: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
