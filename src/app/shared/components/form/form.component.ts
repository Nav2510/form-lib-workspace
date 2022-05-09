import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormModel } from './models/form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup | null = null;
  @Input() configList: FormModel[] = [];

  ngOnInit(): void {
    this.form = this.initForm(this.configList)
    console.log(this.configList, this.form)
  }

  initForm(config: FormModel[]): FormGroup {
    const obj: {[key: string] : FormControl } = {};
    config.forEach((configItem) => {
      obj[configItem.name] = new FormControl(configItem.value)
    })
    return new FormGroup(obj)
  }
}
