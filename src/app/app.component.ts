import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/folder/Início', icon: 'home' },
    { title: 'Perfil', url: '/folder/Perfil', icon: 'person' },
    { title: 'Config', url: '/folder/Config', icon: 'settings' },
    { title: 'Endereços', url: '/folder/Endereços', icon: 'location' },
  ];
  constructor() {}
}
