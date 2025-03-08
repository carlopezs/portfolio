import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';

@Component({
  selector: 'general-avatar',
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: `flex justify-center rounded-full bg-secondary w-36 h-36 mr-7 cursor-pointer`,
    '(mousemove)': 'updateImage($event)',
    '(mouseleave)': 'updateImage($event)',
    '(click)': 'updateImage($event)',


    '(touchend)': 'updateImage($event)',
    '(touchstart)': 'updateImage($event)',
  },
})
export class AvatarComponent {
  public src = 'images/me/avatarme.png';

  public updateImage(event: MouseEvent | TouchEvent) {

    if (event.type === 'mousemove') {
      this.src = 'images/me/avatar_me_2.png';
    } else if (event.type === 'mouseleave') {
      this.src = 'images/me/avatarme.png';
    } else if (event.type === 'touchstart') {
      this.src = 'images/me/avatar_me_surprise.png';
    } else if (event.type === 'touchend') {
      this.src = 'images/me/avatar_me_2.png';
    }
  }
}
