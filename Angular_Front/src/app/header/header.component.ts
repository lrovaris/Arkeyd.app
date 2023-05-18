import { Component, OnInit } from '@angular/core';
import { MetamaskService } from '../services/modal/metamask.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public metamask: MetamaskService, public router: Router, private user: UserService) {

  }
  ngOnInit(): void {

  }

  async connect() {

    if (this.metamask.wallet() != '') {
      return
    }

    this.metamask.connectAccount(async () => {
      (await this.user.getUser(this.metamask.wallet())).subscribe()
    })
  }

  reduceWallet(str:string) {
    if (str.length <= 8) {
      return str; // Return the original string if it has 8 or fewer characters
    } else {
      var firstThree = str.substring(0, 3);
      var lastFive = str.substring(str.length - 5);
      return firstThree + "..." + lastFive;
    }
  }

}
