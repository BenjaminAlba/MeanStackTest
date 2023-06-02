import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'CreateForm',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit{

  character: Character = 
  {
    author: '',
    characterName: '',
    initialHealth: 0,
    initialAtk: 0,
    initialDefense: 0,
    initialSpirit: 0,
    initialSpeed: 0,
    finalHealth: 0,
    finalAtk: 0,
    finalDefense: 0,
    finalSpirit: 0,
    finalSpeed: 0,
    burstName: '',
    burstDescription: '',
    skill1Name: '',
    skill1Description: '',
    skill2Name: '',
    skill2Description: '',
    skill3Name: '',
    skill3Description: '',
    skill4Name: '',
    skill4Description: '',
  }
  submitted = false;
  user: any;
  
  constructor(private characterService: CharacterService, private storageService: StorageService) { }

  ngOnInit(): void 
  {
    this.user = this.storageService.getUser();
  }

  saveCharacter(): void {
    const data = {
      author: this.user.username,
      characterName: this.character.characterName,
      initialHealth: this.character.initialHealth,
      initialAtk: this.character.initialAtk,
      initialDefense: this.character.initialDefense,
      initialSpirit: this.character.initialSpirit,
      initialSpeed: this.character.initialSpeed,
      finalHealth: this.character.finalHealth,
      finalAtk: this.character.finalAtk,
      finalDefense: this.character.finalDefense,
      finalSpirit: this.character.finalSpirit,
      finalSpeed: this.character.finalSpeed,
      burstName: this.character.burstName,
      burstDescription: this.character.burstDescription,
      skill1Name: this.character.skill1Name,
      skill1Description: this.character.skill1Description,
      skill2Name: this.character.skill2Name,
      skill2Description: this.character.skill2Description,
      skill3Name: this.character.skill3Name,
      skill3Description: this.character.skill3Description,
      skill4Name: this.character.skill4Name,
      skill4Description: this.character.skill4Description,
    };

    this.characterService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newCharacter(): void {
    this.submitted = false;
    this.character = {
      author: '',
      characterName: '',
      initialHealth: 0,
      initialAtk: 0,
      initialDefense: 0,
      initialSpirit: 0,
      initialSpeed: 0,
      finalHealth: 0,
      finalAtk: 0,
      finalDefense: 0,
      finalSpirit: 0,
      finalSpeed: 0,
      burstName: '',
      burstDescription: '',
      skill1Name: '',
      skill1Description: '',
      skill2Name: '',
      skill2Description: '',
      skill3Name: '',
      skill3Description: '',
      skill4Name: '',
      skill4Description: '',
    };
  }
}
