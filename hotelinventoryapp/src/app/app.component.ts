import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `Hello world from inline template
  
  // `,
  styleUrls: ['./app.component.scss']
  // styles: [`h1 {color: red}`]
})
export class AppComponent {
  title = 'hotelinventoryapp';

  role = 'Admin'
}
