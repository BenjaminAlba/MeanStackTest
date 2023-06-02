import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'ViewCharacterInfo',
  templateUrl: './view-character-info.component.html',
  styleUrls: ['./view-character-info.component.css']
})
export class ViewCharacterInfoComponent implements OnInit 
{
  @Input() viewMode = false;

  @Input() currentCharacter: Character = {
    id: '',
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

  message = '';

  constructor(private characterService: CharacterService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCharacter(this.route.snapshot.params["id"]);
    }
    console.log(this.currentCharacter.id)
  }

  goToUpdate(): void
  {

  }

  getCharacter(id: string): void {
    this.characterService.get(id)
      .subscribe({
        next: (data) => {
          this.currentCharacter = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateCharacter(): void {
    this.message = '';

    this.characterService.update(this.currentCharacter.id, this.currentCharacter)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This character was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteCharacter(): void {
    this.characterService.delete(this.currentCharacter.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/view']);
        },
        error: (e) => console.error(e)
      });
  }
}
