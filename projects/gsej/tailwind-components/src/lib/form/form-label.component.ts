import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'gsej-ng-tailwind-formlabel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-label.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormLabelComponent {

  @Input()
  class: string = '';

  @Input()
  for: string = '';
}
