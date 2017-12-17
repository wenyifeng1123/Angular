import { Component } from '@angular/core';
/* 我们希望用户在列表中选中一个英雄，然后让这个被选中的英雄出现在详情视图中。
这种 UI 布局模式，通常被称为“主从结构”。
在这个例子中，主视图是英雄列表，从视图则是被选中的英雄。
 */
export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
/* 2.li *ngFor="let hero of heroes"
引号中赋值给ngFor的那段文本表示“从heroes数组中取出每个英雄，
存入一个局部的hero变量，并让它在相应的模板实例中可用”。

3.<span class="badge">{{hero.id}}</span> {{hero.name}}
 在<li>标签中插入一些内容，以便使用模板变量hero来显示英雄的属性。

 4.CSS styles:
 给我们的英雄们“美容”,当用户的鼠标划过英雄或选中一个英雄时，我们得让他/她看起来醒目一点。

 5.(click)="onSelect(hero)"
 插入一句点击事件的绑定代码

 8.<h2>{{selectedHero.name}} details!</h2>
 <div><label>id: </label>{{selectedHero.id}}</div>
 <div>
 <label>name: </label>
 <input [(ngModel)]="selectedHero.name" placeholder="name"/>
 </div>
 我们将把所选英雄的详细信息显示在模板中。目前，它仍然引用之前的hero属性。
 我们这就修改模板，让它绑定到新的selectedHero属性

 9.<div *ngIf="selectedHero">
 当应用加载时，我们会看到一个英雄列表，但还没有任何英雄被选中
 我们可以把模板中的英雄详情内容区放在一个<div>中。
 然后，添加一个ngIf内置指令，把ngIf的值设置为组件的selectedHero属性。

 10.[class.selected]="hero === selectedHero"
 给所选英雄添加样式
 */
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes"> 
      <li *ngFor="let hero of heroes"
          [class.selected]="hero === selectedHero"
          (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
      </div>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})


export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES; // 1.我们在AppComponent上创建一个公共属性，用来暴露这些英雄，以供绑定
  selectedHero: Hero; // 6.添加点击处理器以暴露选中的英雄

  // 7 用于将用户点击的英雄赋给selectedHero属性
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
