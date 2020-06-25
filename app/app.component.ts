// This is my app component (also called a root component), there's typically 1 of these per app, and they determine everything that gets included/rendered in my app.

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {}
