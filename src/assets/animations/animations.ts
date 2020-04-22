import { trigger, state, style, transition,
  animate, group} from '@angular/animations';

export const SlideInOutAnimation = [
  trigger('slideInOut', [
      state('in', style({
          'max-height': '2000px', 'opacity': '1', 'visibility': 'visible'
      })),
      state('out', style({
          'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
      })),
      transition('in => out', [group([
          animate('300ms ease-in-out', style({
              'opacity': '1'
          })),
          animate('450ms ease-in-out', style({
              'max-height': '0px'
          })),
          animate('600ms ease-in-out', style({
              'visibility': 'hidden'
          }))
      ]
      )]),
      transition('out => in', [group([
          animate('1ms ease-in-out', style({
              'visibility': 'visible'
          })),
          animate('600ms ease-in-out', style({
              'max-height': '500px'
          })),
          animate('800ms ease-in-out', style({
              'opacity': '1'
          }))
      ]
      )])
  ]),
  trigger('slide', [
    state('left', style({ transform: 'translateX(0)' })),
    state('right', style({ transform: 'translateX(-100%)' })),
    transition('initial => *', animate(2000))
])
];

