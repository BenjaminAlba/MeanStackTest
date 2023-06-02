import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit
{
  user: any;

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void 
  {
    this.user = this.storageService.getUser();
  }

  reloadPage(): void {
    window.location.reload();
  }

  logOut(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        this.reloadPage();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
