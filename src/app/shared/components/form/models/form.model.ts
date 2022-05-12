import { FormSubType } from "./form-sub-type.model";
import { FormType } from "./form-type.model";

export interface FormModel {
  label: string;
  multi?: boolean;
  name: string;
  options?: {label: string, value: string}[];
  placeholder?: string;
  required?: boolean;
  aboveSeparator?: boolean;
  belowSeparator?: boolean;
  subType?: FormSubType;
  type: FormType;
  value?: string;
}