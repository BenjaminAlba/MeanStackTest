import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'CreateContainer',
  templateUrl: './create-container.component.html',
  styleUrls: ['./create-container.component.css']
})
export class CreateContainerComponent implements OnInit
{
  user: any;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void 
  {
    this.user = this.storageService.getUser();
  }

}
