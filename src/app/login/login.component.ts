import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading: boolean = false

  constructor() { }

  public submit(form): void {
    console.log(form)
  }

  ngOnInit(): void {
  }

}
