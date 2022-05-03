import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-pending-transaction',
  templateUrl: './pending-transaction.component.html',
  styleUrls: ['./pending-transaction.component.scss']
})
export class PendingTransactionComponent implements OnInit {

  public pendingTransaction = [];

  constructor(private blockchainService:BlockchainService) {
    this.pendingTransaction = blockchainService.getPendingTransactions();
  }

  ngOnInit(): void {
  }

  minePendingTransactions(){
    this.blockchainService.minePendingTransactions();
  }

}
