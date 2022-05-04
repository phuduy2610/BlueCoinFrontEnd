//@ts-ignore
import {BlockChain} from 'cmnblockchain/src/blockchain';
import {Injectable } from '@angular/core';
import {ec} from 'elliptic';
@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  public blockchainInstance = new BlockChain();
  public walletKeys:any[] = [];
  constructor() {
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingTransactions('my-wallet-address');

    this.generateWalletKeys();
   }

  getBlocks(){
    return this.blockchainInstance.chain;
  }

  addTransaction(tx){
    this.blockchainInstance.addTransaction(tx);
  }

  getPendingTransactions(){
    return this.blockchainInstance.pendingTransactions;
  }

  minePendingTransactions(){
    this.blockchainInstance.minePendingTransactions(
      this.walletKeys[0].publicKey
    ); 
  }

  private generateWalletKeys(){
    const eC = new ec('secp256k1');
    const key = eC.genKeyPair();

    this.walletKeys.push({
      keyObj:key,
      publicKey:key.getPublic('hex'),
      privateKey:key.getPrivate('hex'),
    });

  }
}
