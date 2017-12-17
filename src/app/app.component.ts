import { Component } from '@angular/core';
// NgModel 属于一个可选模块FormsModule。我们必须选择使用那个模块
// Hero 对象
// 当输入改变时上面小标题也会改变
export class Hero {
  id: number;
  name: string;
}

// 使用多行模板字符串添加更多 HTML
@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <h2>{{hero.name}} details!!</h2>
  <div><label>id:</label>{{hero.id}}</div>
  
  <div>
    <label>name:</label> 
    <input [(ngModel)]="hero.name" placeholder="name">
  </div>
  `
})


export class AppComponent  {
 title= 'Tour of Heros';
 // hero= 'Windstorm';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
 }


