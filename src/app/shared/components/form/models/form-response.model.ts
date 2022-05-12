import { FormGroup } from "@angular/forms";

export interface FormResponseModel {
  value: { [key: string]: string };
  form: FormGroup;
}