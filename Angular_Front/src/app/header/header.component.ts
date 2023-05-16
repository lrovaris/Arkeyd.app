import { Component } from '@angular/core';
import { MetamaskService } from '../services/modal/metamask.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public metamask: MetamaskService, public router: Router) {
      
  }

  async connect() {
    this.metamask.connectAccount(() => {

    })
  }

}
