import { Injectable, signal } from '@angular/core';
import { WinRefService } from '../winRef/win-ref.service';
import { UserService } from '../user/user.service';


@Injectable({
  providedIn: 'root'
})

export class MetamaskService {

  ethereum:any;

  wallet = signal('')

  constructor(private winRef: WinRefService, private user: UserService) {

    this.ethereum = winRef.window.ethereum;

  }

  async connectAccount(callback:any) {

    let wallet = await this.ethereum.request({ method: 'eth_requestAccounts' })

    this.wallet.set(wallet[0])

    callback();

  }

  async getChainId() {

    return await this.ethereum.request({ method: 'eth_chainId' });

  }

}
