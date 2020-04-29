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
  logoImg: string = '../../assets/images/pp_logo.png';
  logoImgDraft: string = '../../assets/images/pp_logo-min.png';
  profileImg: string = '../../assets/images/profile_image.png';
  profileImgDraft: string = '../../assets/images/profile_image-min.png';

  constructor() { }

  ngOnInit() {
  }

}
