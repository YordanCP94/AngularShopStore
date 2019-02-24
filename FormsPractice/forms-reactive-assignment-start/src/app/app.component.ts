import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  statusOptions: string[] = ["Stable","Critical","Finished"];
  form: FormGroup;

  ngOnInit(){
    this.form = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.validateProjectName.bind(this)], this.asyncValidProjectName.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl("Stable")
    }); 
  }

  validateProjectName(control: FormControl): {[s: string]: boolean}{
    if(control.value === 'Test'){
      return {'projectNameIsForbidden':true};
    }
    return null;
  }

  onSaveProject(){
    console.log(this.form.value);
  }

  asyncValidProjectName(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test'){
          resolve({'projectNameIsForbidden':true});
        } else {
          resolve(null);
        }
      },2000);
    });
    return promise;
  }
}
