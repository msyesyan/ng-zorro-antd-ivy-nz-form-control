import { Component, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
  <p>大概是不支持 nz-container, nz-container ng-template 出去的组件，无法获取到 nzFormStatusService, 而动态 render template, 应该是一个稍微复杂一点的生产级前端所需要的正常需求，请问是否可以解决一下？</p>
  <form nz-form [formGroup]="formGroup" nzLayout="vertical">
    <nz-form-item>
      <nz-form-label>输入并删除，不会有错误状态</nz-form-label>
      <nz-form-control>
        <ng-container *ngTemplateOutlet="dynamicTpl"></ng-container>
      </nz-form-control>
    </nz-form-item>
    <nz-form-item>
      <nz-form-label>
        正常交互
      </nz-form-label>
      <nz-form-control>
      <input nz-input formControlName="name" />
      </nz-form-control>
    </nz-form-item>
    <ng-template #dynamicTpl>
      <input nz-input formControlName="name" />
    </ng-template>
  </form>
  `,
})
export class AppComponent {
  formGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
  });
}
