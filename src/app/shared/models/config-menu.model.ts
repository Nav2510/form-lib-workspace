import { ConfigTypeEnum } from "./config-type.model";

export interface ConfigMenuModel {
  configType: ConfigTypeEnum;
  label: string;
  src: string;
  type?: string;
}