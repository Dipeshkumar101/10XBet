import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('slidesRef', { static: true }) slidesRef!: IonSlides;

  public options = {
    keyboard: true
  }
  constructor() {}
  ngOnInit() {
    this.startAutoSlide();
  }

  async startAutoSlide() {
    setInterval(async () => {
      const isEnd = await this.slidesRef.isEnd();
      if (isEnd) {
        this.slidesRef.slideTo(0);
      } else {
        this.slidesRef.slideNext();
      }
    }, 3000);
  }

  public slideWillChange() {

  }

  public async slideDidChange() {

    if (!this.slidesRef) return;

    
  }
}
