import { districts } from './../../interface/interface';
import { Component } from '@angular/core';
import{ FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
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
      firstname: new FormControl(' '),
      lastname: new FormControl(' '),
      email: new FormControl(''),
      dob: new FormControl(' '),
      address: new FormControl(' '),
      phoneno: new FormControl(' '),
      gender: new FormControl(' '),
      pincode: new FormControl(' '),
      taluk: new FormControl(' '),
      district: new FormControl(' '),
      state: new FormControl(' '),

    }
   )
   onEnter() {
   console.log(this.RegistrationForm.value);

   }

constructor(private api:ApiService){}


pinCheck()
  {
    let pincode=this.RegistrationForm.value.pincode

    if(pincode?.length==7)
    {
      console.log(pincode);

      this.api.getPincodeData(pincode).subscribe((data:any)=>{
        this.RegistrationForm.get('taluk')?.setValue(data[0].taluk)
        this.RegistrationForm.get('district')?.setValue(data[0].districtName)
        this.RegistrationForm.get('state')?.setValue(data[0].stateName)

        // this.loginForm.get('district')?.setValue(data[0])
        console.log(data[0])
    })

    }

  }


}

