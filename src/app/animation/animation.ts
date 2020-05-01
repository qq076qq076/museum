import { trigger, transition, keyframes, animate, style, state } from '@angular/animations';

export const fadeInOutAnimation =
  trigger('fadeInOutAnimation', [
    transition(':enter', [
      animate('.2s cubic-bezier(0.22, 0.73, 1, 1)',
        keyframes([
          style({ opacity: 0, offset: 0 }),
          style({ opacity: 1, offset: 1 })
        ]))
    ]),
    transition(':leave', [
      animate('.2s cubic-bezier(0.22, 0.73, 1, 1)',
        keyframes([
          style({ opacity: 1, offset: 0 }),
          style({ opacity: 0, offset: 1 })
        ]))
    ])
  ]);

export const cardAnimation =
  trigger('cardAnimation', [
    state('thirdWait', style({
      opacity: 0.5,
      transform: 'scale(0.85) translateY(-100px)',
      'z-index': 9,
      'pointer-events': 'none',
    })),
    state('secondWait', style({
      opacity: 0.5,
      transform: 'scale(0.93) translateY(-50px)',
      'z-index': 9,
      'pointer-events': 'none',
    })),
    state('show', style({
      opacity: 1,
    })),
    transition('*=>*', [
      animate('0.2s'),
    ]),
    transition(':enter', [
      style({
        opacity: 1,
        transform: 'scale(0.85) translateY(-100px)',
        'z-index': 9,
        'pointer-events': 'none',
      }),
      style({
        opacity: 0,
        transform: 'scale(0.85) translateY(-100px)',
        'z-index': 9,
        'pointer-events': 'none',
      }),

      //   style({ opacity: 0, offset: 0 }),
      //   style({ opacity: 1, offset: 0 }),
    ]),
    // transition(':leave', [
    //   style({ opacity: 1, offset: 0 }),
    //   style({ opacity: 0, offset: 0 }),
    // ]),
  ]);
