import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CostsComponent } from './components/cost/costs.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const appRoutes: Routes = [
    { path: 'costs', component: CostsComponent, data: { title: 'Costs List' } },
    { path: '',
      redirectTo: '/costs',
      pathMatch: 'full'
    },
    { path: '**', component: NotfoundComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule {}
