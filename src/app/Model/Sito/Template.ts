import { ITemplate } from "src/app/Interface/ITemplate";

export class Template implements ITemplate {
  TemplateName: string;
  TemplateHeaderHtml: string;
  TemplateBodyHtml: string;
  TemplateFooterHtml: string;

  constructor(templateName: string, headerHtml: string, bodyHtml: string, footerHtml: string) {
    this.TemplateName = templateName;
    this.TemplateHeaderHtml = headerHtml;
    this.TemplateBodyHtml = bodyHtml;
    this.TemplateFooterHtml = footerHtml;
  }
}