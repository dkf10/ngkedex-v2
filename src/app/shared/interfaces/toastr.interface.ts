import { TemplateRef } from "@angular/core";

export interface Toast {
  id: number;
  template: TemplateRef<any>;
  classname?: string;
  delay?: number;
}