import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'gsej-ng-tailwind-card-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardHeaderComponent {

  @Input()
  class: string = '';

}
