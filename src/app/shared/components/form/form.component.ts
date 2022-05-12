import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { FormResponseModel } from './models/form-response.model';

import { FormModel } from './models/form.model';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() configList: FormModel[] = [];
  @Output() valueChanges = new EventEmitter<FormResponseModel>();
  @Output() formSubmit = new EventEmitter<void>();
  
  form: FormGroup | null = null;
  destroy$ = new Subject<void>();

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.form?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      this.form ? this.valueChanges.next({value: value, form: this.form}) : '';
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['configList'].currentValue) {
      this.form = this.formService.initForm(changes['configList'].currentValue);
    }
  }

  onSubmit(): void {
    if (this.form?.invalid) {
      return this.form.markAllAsTouched();
    }
    this.formSubmit.emit();
  }
  
  ngOnDestroy(): void {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }
}
