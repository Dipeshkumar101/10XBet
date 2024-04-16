import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  
  selectedTab: string = 'tab1';
  constructor() {}

  tabSelected(tab:any){
    this.selectedTab = tab;
    console.log(this.selectedTab)
  }

}