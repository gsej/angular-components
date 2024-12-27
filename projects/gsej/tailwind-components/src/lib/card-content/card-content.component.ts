import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'gsej-ng-tailwind-card-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardContentComponent {

  @Input()
  class: string = '';
}
