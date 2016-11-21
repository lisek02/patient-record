import { Component, Input } from '@angular/core';

@Component({
  selector: 'title-bar',
  templateUrl: 'title-bar.html',
  styles: ['title-bar.scss']
})

export class TitleBarComponent{
  @Input() title: string;
}