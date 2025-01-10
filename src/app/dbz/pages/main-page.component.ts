import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DBZService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-page',
    templateUrl: 'main-page.component.html'
})

export class mainPageComponent {

    constructor(private dbzService:DBZService){
    }

    get characters():Character[]{
        return [...this.dbzService.characters];
    }

    onDeleteCharacter(id:string):void{
        this.dbzService.deleteCharacterById(id)
    }

    onNewCharacter(character:Character){
        this.dbzService.addCharacter(character)
    }

    
}