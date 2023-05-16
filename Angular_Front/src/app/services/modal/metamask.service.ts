import { Injectable } from '@angular/core';
import { WinRefService } from '../winRef/win-ref.service';


@Injectable({
  providedIn: 'root'
})

export class MetamaskService {
  
  ethereum:any;

  constructor(private winRef: WinRefService) {

    this.ethereum = winRef.window.ethereum;

  }

  async connectAccount(callback:any) {
    
    await this.ethereum.request({ method: 'eth_requestAccounts' })

    callback();

  }

  async getChainId() {
    
    return await this.ethereum.request({ method: 'eth_chainId' });

  }

}
