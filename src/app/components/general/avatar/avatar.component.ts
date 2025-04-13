import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';

@Component({
  selector: 'general-avatar',
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: `flex justify-center rounded-full bg-secondary w-full h-full mr-7 cursor-pointer`,
    '(mousemove)': 'updateImage($event)',
    '(mouseleave)': 'updateImage($event)',
    '(click)': 'updateImage($event)',
    '(touchend)': 'updateImage($event)',
    '(touchstart)': 'updateImage($event)',
  },
})
export class AvatarComponent {
  public src = 'images/me/avatarme.webp';

  public updateImage(event: MouseEvent | TouchEvent) {

    if (event.type === 'mousemove') {
      this.src = 'images/me/avatar_me_2.webp';
    } else if (event.type === 'mouseleave') {
      this.src = 'images/me/avatarme.webp';
    } else if (event.type === 'touchstart') {
      this.src = 'images/me/avatar_me_surprise.webp';
    } else if (event.type === 'touchend') {
      this.src = 'images/me/avatar_me_2.webp';
    }
  }
}
