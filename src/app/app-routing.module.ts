import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';
import { PendingTransactionComponent } from './pages/pending-transaction/pending-transaction.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {path:'',component:BlockchainViewerComponent},
  {path:'settings',component:SettingsComponent},
  {path:'new/transaction',component:CreateTransactionComponent},
  {path:'new/transaction/pending',component:PendingTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
