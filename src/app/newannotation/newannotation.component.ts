import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HotspotService } from '../../service/hotspot.service';
import { ToPosAction } from '../../action';
import { Stores } from '../../store';
import { data, DataObserver } from 'statex/angular';

@Component({
  selector: 'app-newannotation',
  templateUrl: './newannotation.component.html',
  styleUrls: ['./newannotation.component.scss']
})
export class NewannotationComponent extends DataObserver implements OnInit {

  newAnnotationForm : FormGroup

  caseId : any

  pitch: any
  yaw: any

  constructor(public stores: Stores, private route: ActivatedRoute, private router : Router, private hotspotService : HotspotService) {

    this.route.params.subscribe(params => {
       this.caseId = params['id'];
    });    

    this.route.queryParams.subscribe(params => {
       this.pitch = params['pitch'];
       this.yaw = params['yaw'];

       new ToPosAction({ x: this.pitch, y: this.yaw }).dispatch();

    });        

    this.newAnnotationForm = new FormGroup({
      'title': new FormControl("", Validators.required),
      'description': new FormControl("", Validators.required),
    });

   }

  public submitNewAnnotation() {

    var newAnnotation = {
      text: this.newAnnotationForm.controls.title.value,
      description: this.newAnnotationForm.controls.description.value,
      hotspotType: "info",
      case_id: this.caseId,
      pitch: this.pitch,
      yaw: this.yaw
    };

    this.hotspotService.store(this.caseId, newAnnotation).subscribe(() => {
      this.router.navigateByUrl('/case/' + this.caseId);
    })
    

  }

  ngOnInit() {
  }

}
