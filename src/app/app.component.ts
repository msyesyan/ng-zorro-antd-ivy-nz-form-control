import { Component } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
  <form nz-form [formGroup]="formGroup">
    <nz-form-item>
      <nz-form-control>
        <ng-container *ngTemplateOutlet="dynamicTpl"></ng-container>
      </nz-form-control>
    </nz-form-item>
    <ng-template #dynamicTpl>
      <input formControlName="name" />
    </ng-template>
  </form>
  `
})
export class AppComponent {
  formGroup = new FormGroup({
    name: new FormControl(null, [Validators.required])
  })
}

