import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {  path: '', redirectTo: '/home', pathMatch: 'full'},
    {  path: 'home', loadChildren: './home/home.module#HomePageModule'},
    {  path: 'sign-in', loadChildren: './sign-in/sign-in.module#SignInPageModule'},
    {  path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule'},
    {  path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule'},
    {  path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule'},
    {  path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule'},
    {  path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule'},
    { path: 'prescription', loadChildren: './prescription/prescription.module#PrescriptionPageModule' },
  { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'address', loadChildren: './address/address.module#AddressPageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'orderhistory', loadChildren: './orderhistory/orderhistory.module#OrderhistoryPageModule' },
  { path: 'change-password', loadChildren: './change-password/change-password.module#ChangePasswordPageModule' },
  { path: 'slider', loadChildren: './slider/slider.module#SliderPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
