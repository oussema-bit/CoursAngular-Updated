import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {lezmArctic} from "./CustomValid";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit{
  formResidence!:FormGroup;
  errorMsg!:string;

  ngOnInit(){
    this.formResidence=new FormGroup({
      id:new FormControl('',[
        Validators.required,
        Validators.pattern('^[1-9]*$')
      ]),
      name:new FormControl('',[
        Validators.required,
        //Validators.pattern('^[A-Z][a-zA-Z]*'),
        lezmArctic
      ]),
      address:new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.email
      ])
    });
  }
  get_id(){
    return this.formResidence.get('id');
  }
  get_name(){
    return this.formResidence.get('name');
  }
  get_address(){
    return this.formResidence.get('address');
  }
  submit() {
    console.log(this.formResidence.value);
  }
}
