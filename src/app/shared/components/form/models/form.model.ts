import { FormSubType } from "./form-sub-type.model";
import { FormType } from "./form-type.model";
import { OptionModel } from "./option.model";

export interface FormModel {
  isAddable?: boolean;
  label: string;
  multi?: boolean;
  name: string;
  options?: OptionModel[];
  placeholder?: string;
  required?: boolean;
  aboveSeparator?: boolean;
  belowSeparator?: boolean;
  subType?: FormSubType;
  type: FormType;
  value?: string;
}