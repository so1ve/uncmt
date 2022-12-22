import type { WalineInitOptions } from "@waline/client";

export interface ConfigMap {
  waline: Omit<WalineInitOptions, "el">
}

export type SupportedProviders = keyof ConfigMap;
