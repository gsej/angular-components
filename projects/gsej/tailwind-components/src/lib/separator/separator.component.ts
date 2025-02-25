import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'gsej-ng-tailwind-separator',
  standalone: true,
  imports: [CommonModule],
  template: `<div [ngClass]="[class, 'shrink-0', 'bg-border', 'h-[1px]', 'w-full']"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeparatorComponent {

  @Input()
  class: string = '';
}
