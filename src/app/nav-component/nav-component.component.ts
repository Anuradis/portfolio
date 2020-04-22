import { Component, OnInit } from '@angular/core';
import { transition } from '@angular/animations';
import { trigger, useAnimation } from '@angular/animations';
import { bounceInLeft, bounceInRight} from 'ng-animate';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css'],
  animations: [trigger('fadeInLeft', [transition('* => *', useAnimation(bounceInLeft, {params: { timing: 4, Opacity: 0, }}
    ))], ), trigger('fadeInRight', [transition('* => *', useAnimation(bounceInRight, {params: { timing: 4, Opacity: 0, }}
      ))], )
],
})
export class NavComponentComponent implements OnInit {

  fadeInLeft: Animation;
  fadeInRight: Animation;
  constructor() { }

  ngOnInit() {
  }

}
