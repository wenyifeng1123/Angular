import { Component, Input } from '@angular/core';

import { Hero } from './hero';

/*
 要把英雄详情的视图移入HeroDetailComponent，
 只要把英雄详情的 内容 从AppComponent模板的底部剪切出来，
 粘贴到@Component元数据的template属性中就可以了。
 */
@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}
