import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthenticationService } from './services';

@Component({
  selector: 'app-about',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {
            
  }

  ngOnInit() {
  }
listOfPeople = ['Stephen', 'Elana', 'Kara'];

  addPerson() {
    let newPerson = prompt('Name someone');
    this.listOfPeople.push(newPerson);
  }
  login(username: string, password: string) {
        this.authenticationService.login(username, password)
            .pipe(first())
            .subscribe(
                data => {
                },
                error => {
                });
        console.log(username, password)
    }
}