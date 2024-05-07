import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-with-label',
  templateUrl: './image-with-label.component.html',
  styleUrls: ['./image-with-label.component.sass'],
})
export class ImageWithLabelComponent {
  @Input()
  label: string = '';

  @Input()
  labelPosition: string = 'left';

  @Input()
  imgUrl: string = '';
}
