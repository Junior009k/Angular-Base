import { NgModule } from "@angular/core";
import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[
        HeroComponent, 
        ListComponent
    ],
    imports: [BrowserModule], 
    exports:[
        HeroComponent, 
        ListComponent
    ]
})
export class HeroesModule{

}