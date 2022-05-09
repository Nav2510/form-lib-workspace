import { ConfigTypeEnum } from "./config-type.model";

export interface ConfigMenu {
  configType: ConfigTypeEnum;
  label: string;
  src: string;
  type?: string;
}