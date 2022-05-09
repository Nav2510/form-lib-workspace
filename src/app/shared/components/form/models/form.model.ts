import { FormSubType } from "./form-sub-type.model";
import { FormType } from "./form-type.model";

export interface FormModel {
  label: string;
  name: string;
  options?: {label: string, value: string}[];
  placeholder?: string;
  subType?: FormSubType;
  type: FormType;
  value?: string;
  multi?: boolean;
  saparator?: boolean;
}