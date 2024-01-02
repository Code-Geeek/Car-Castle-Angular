import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+( [a-zA-Z]+)*$')]],
    mobile: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  });
  
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {}

  register() {
    if (this.registerForm.valid) {
      const name = this.registerForm.value.name;
      const mobile = this.registerForm.value.mobile;
      const email = this.registerForm.value.email;
      const password = this.registerForm.value.password;
      const user = { name, mobile, email, password };

      this.api.registerAPI(user).subscribe({
        next: (res: any) => {
          alert(`${res.name} registered succesfully !`);
          this.router.navigateByUrl('/login');
          this.registerForm.reset();
        },
        error: (err: any) => {
          alert(err.error);
          console.log(err.error);

          this.registerForm.reset();
        },
      });
    } else {
      alert('Invalid form');
    }
  }

}
