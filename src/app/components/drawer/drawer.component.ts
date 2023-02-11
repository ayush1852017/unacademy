import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
// import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  @Output() close = new EventEmitter();
  constructor(private fb: FormBuilder, private userService: UserService) {}
  separateDialCode = false;
  // SearchCountryField = SearchCountryField;
  // CountryISO = CountryISO;
  // PhoneNumberFormat = PhoneNumberFormat;
  // preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  myForm!: FormGroup;
  signInForm!: FormGroup;
  signUpForm!: FormGroup;
  showPassword: boolean = false;
  openSignUp: boolean = false;
  logout: boolean = false;
  ngOnInit(): void {
    this.getUserDetails();
    // this.myForm = this.fb.group({
    //   contact_number: new FormControl('', [
    //     Validators.pattern(/^[0-9]+$/),
    //     Validators.maxLength(15),
    //   ]),
    // })
    this.signUpForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z0-9_]*$'),
        Validators.maxLength(75),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        /* validator for no special char at beginning/end + domain name ***/
        Validators.pattern(
          '^[a-zA-Z0-9]+(?:[._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+\\.[a-z]{2,3}$'
        ),
      ]),
      password: new FormControl('', Validators.compose([Validators.required])),
    });
    this.signInForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        /* validator for no special char at beginning/end + domain name ***/
        Validators.pattern(
          '^[a-zA-Z0-9]+(?:[._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+\\.[a-z]{2,3}$'
        ),
      ]),
      password: new FormControl('', [Validators.required,Validators.minLength(8)]),
    });
  }

  get signInFormControl() {
    return this.signInForm.controls;
  }
  get signUpFormControl() {
    return this.signUpForm.controls;
  }
  /*** close sidepanel */
  closePanel() {
    this.close.emit(true);
  }
  // changePreferredCountries() {
  // 	this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  // }
  onRegister() {
    console.log(this.signUpForm.value)
    this.userService.signUp(this.signUpForm.value).subscribe({
      next: (resp: any) => {
        this.getUserDetails();
        this.openSignUp=false;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  onLogin() {
    this.userService.login(this.signInForm.value).subscribe({
      next: (resp: any) => {
        this.closePanel()
        this.getUserDetails();
        this.logout = true;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  /** get form control */
  /** show/hide password 1 */
  password() {
    this.showPassword = !this.showPassword;
  }
  /** get user details from `me` api  */
  getUserDetails() {
    this.userService.me().subscribe({
      next: (resp: any) => {
        localStorage.setItem('user', JSON.stringify(resp));
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
