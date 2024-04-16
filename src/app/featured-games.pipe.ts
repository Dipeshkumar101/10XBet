import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'featuredGames',
  standalone: true
})
export class FeaturedGamesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
