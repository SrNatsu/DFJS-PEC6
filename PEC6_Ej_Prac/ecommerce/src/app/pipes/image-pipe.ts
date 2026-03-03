import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(value: string): string {
    if (value.trim()) {
      return value;
    } else {
      return `/assets/images/article2.jpg`;
    }
  }
}
