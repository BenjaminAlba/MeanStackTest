import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'ViewCharacterList',
  templateUrl: './view-character-list.component.html',
  styleUrls: ['./view-character-list.component.css']
})
export class ViewCharacterListComponent implements OnInit
{
  characters?: Character[];
  currentCharacter: Character = {};
  currentIndex = -1;
  author = '';

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.retrieveCharacters();
  }

  retrieveCharacters(): void {
    this.characterService.getAll()
      .subscribe({
        next: (data) => {
          this.characters = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveCharacters();
    this.currentCharacter = {};
    this.currentIndex = -1;
  }

  setActiveCharacter(character: Character, index: number): void {
    
    console.log("clicked on character")

    this.currentCharacter = character;
    this.currentIndex = index;


  }

  removeAllCharacters(): void {
    this.characterService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchAuthor(): void {
    this.currentCharacter = {};
    this.currentIndex = -1;

    this.characterService.findByAuthor(this.author)
      .subscribe({
        next: (data) => {
          this.characters = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
