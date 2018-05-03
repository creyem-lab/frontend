import { Component, OnInit } from '@angular/core';
import { data, DataObserver } from 'statex/angular';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { ChangeDetectorRef } from '@angular/core';
import { NewCaseAction } from '../../action';
import { Stores } from '../../store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newcase',
  templateUrl: './newcase.component.html',
  styleUrls: ['./newcase.component.scss']
})
export class NewcaseComponent extends DataObserver implements OnInit {

  newCaseForm : FormGroup

  constructor(public stores: Stores, private router : Router, private cd: ChangeDetectorRef) { 

    super();

    this.newCaseForm = new FormGroup({
      'title': new FormControl("", Validators.required),
      'description': new FormControl("", Validators.required),
      'image': new FormControl(null, Validators.required),
    });

  }

  ngOnInit() {
  }


  onFileChange(event) {
    let reader = new FileReader();
  
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        this.newCaseForm.patchValue({
          image: reader.result
        });
        
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

  public submitNewCase() {

    var newCase = {
      title: this.newCaseForm.controls.title.value,
      description: this.newCaseForm.controls.description.value,
      image: this.newCaseForm.controls.image.value
    };

    new NewCaseAction(newCase).dispatch().then(() => {
      this.router.navigateByUrl('/list');
    });

  }

}
