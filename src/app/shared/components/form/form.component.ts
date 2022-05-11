import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { FormModel } from './models/form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy {
  @Input() configList: FormModel[] = [];
  @Output() valueChanges = new EventEmitter<any>();
  
  form: FormGroup | null = null;
  destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.form = this.initForm(this.configList)
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      this.valueChanges.next(value);
    });
  }

  initForm(config: FormModel[]): FormGroup {
    const obj: {[key: string] : FormControl } = {};
    config.forEach((configItem) => {
      obj[configItem.name] = new FormControl(configItem.value)
    })
    return new FormGroup(obj)
  }
  
  ngOnDestroy(): void {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }
}
