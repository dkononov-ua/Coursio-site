import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from './shared/shared.module';

import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { CoursesModule } from './сourses/сourses.module';
import { CoursesRoutingModule } from './сourses/сourses-routing.module';
import { TemplateComponent } from './template/template.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    MatSelectModule,
    MatDialogModule,
    MatSliderModule,
    MatIconModule,
    RouterModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatMenuModule,
    MatCheckboxModule,
    HammerModule,
    MatProgressSpinnerModule,

    MatInputModule,
    MatFormFieldModule,

    AuthModule,
    AuthRoutingModule,
    SharedModule,

    CoursesModule,
    CoursesRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
