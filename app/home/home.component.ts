import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listOfPeople = ['Stephen', 'Elana', 'Kara'];

  addPerson() {
    let newPerson = prompt('Name someone');
    this.listOfPeople.push(newPerson);
  }

}