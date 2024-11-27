import { districts } from './../../interface/interface';
import { Component } from '@angular/core';
import{ FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { validation } from '../../interface/interface';
import { MyButtonComponent } from "../../ui/my-button/my-button.component";
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MyButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


onClick() {
console.log(this.LoginForm.value);

}

onSubmit(form: NgForm) {
console.log(form.value);
}
  userData:validation={
    email: '',
    password: ''
  }

  LoginForm = new FormGroup(
    {
     email: new FormControl(''),
     password: new FormControl('')
    }
   )

   RegistrationForm =new FormGroup(
    {
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dob: new FormControl('', Validators.required),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      phoneno: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{10}$")]),
      gender: new FormControl('', Validators.required),
      pincode: new FormControl('',[Validators.required, Validators.pattern("^[0-9]{6}$")]),
      taluk: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repeatpassword: new FormControl('', Validators.required)

    }
   )
   onEnter() {
   console.log(this.RegistrationForm.value);

   }

constructor(private api:ApiService){}


pinCheck()
  {
    let pincode=this.RegistrationForm.value.pincode


    if(pincode?.length==6)
    {

      this.api.getPincodeData(pincode).subscribe((res:any)=>{
        this.RegistrationForm.get('taluk')?.setValue(res[0].taluk)
        this.RegistrationForm.get('district')?.setValue(res[0].districtName)
        this.RegistrationForm.get('state')?.setValue(res[0].stateName)

        // this.loginForm.get('district')?.setValue(data[0])
        console.log(res[0])
    })

    }

  }


}

