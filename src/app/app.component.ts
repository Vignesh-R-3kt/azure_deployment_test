import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputForm: FormGroup;
  users: any[] = [];

  constructor(private fb: FormBuilder, private http: ApiService) {
    this.inputForm = this.fb.group({
      data: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  fetchAllUsers() {
    this.http.fetchAllData().subscribe((res: any) => {
      console.log(res);
    })
  }

  fetchFormData() {
    const inputValue = this.inputForm.value.data;
    this.http.postNewUser(inputValue).subscribe((res: any) => {
      this.fetchAllUsers();
    })
  }
}
