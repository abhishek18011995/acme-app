import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div>
  <nav class='navbar navbar-default'>
  <div class='container-fluid'>
      <a class='navbar-brand'></a>
      <ul class='nav navbar-nav'>
          <li><a href="/">Home</a></li>
          <li><a href="/">Product List</a></li>
      </ul>
  </div>
</nav>
 <!-- <h1>Acme Product Management</h1>-->
  <product-list ></product-list>
  </div>`,
})
export class AppComponent  {

  
 
 }
