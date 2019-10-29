import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeModule } from './modules/employee/employee.module';
import { EmployeeDeleteComponent } from './modules/employee/employee-delete/employee-delete.component';
import { EmployeeDetailComponent } from './modules/employee/employee-detail/employee-detail.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    EmployeeModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents : [EmployeeDeleteComponent,EmployeeDetailComponent]
})
export class AppModule { }
