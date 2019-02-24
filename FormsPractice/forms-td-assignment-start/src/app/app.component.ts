import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: HTMLFormElement;

  onSubmit(){
    console.log("Form: ", this.form);
    
  }
}
