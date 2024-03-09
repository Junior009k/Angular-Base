import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iroman';
  public nameCapitalizable: string = this.name.charAt(0).toUpperCase() + this.name.slice(1);
  public age:  number = 45;



  resetForm():void{

    this.name='iroman'
    this.age=45
  
    
  }
  changeHero(name : string):void{

    this.name=name
  
    
  }

  changeAge(age : number):void{

    this.age=age
  }

  get capitalizedName():string{
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);

  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }



}
