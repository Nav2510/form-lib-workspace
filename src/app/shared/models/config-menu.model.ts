import { ConfigTypeEnum } from "./config-type.model";

export interface ConfigMenuModel {
  configType: ConfigTypeEnum;
  label: string;
  src: string;
  nightThemeSrc?: string;
  type?: string;
}