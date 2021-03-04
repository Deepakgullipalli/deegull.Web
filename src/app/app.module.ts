import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { DialogContentExampleComponent } from './dialog-content-example/dialog-content-example.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { TestNgbdModalContentComponent } from './test-ngbd-modal-content/test-ngbd-modal-content.component';
import { RatingComponent } from './rating/rating.component';
import { TestTabsComponent } from './tabs/materialTabs/test-tabs/test-tabs.component';
import { ModalPopUpComponent } from './modal-pop-up/modal-pop-up.component';
import { MyMatTableComponent } from './my-mat-table/my-mat-table.component';
import { ThinScrollComponent } from './thin-scroll/thin-scroll.component';
import { MyMatAccordionComponent } from './my-mat-accordion/my-mat-accordion.component';
import { MyMatDrawerComponent } from './my-mat-drawer/my-mat-drawer.component';
import { TableViewComponent } from './table-view/table-view.component';
import { ParentOneComponent } from './parent-one/parent-one.component';
import { ParentTwoComponent } from './parent-two/parent-two.component';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { TestService } from './services/test.service';

import { AuthInterceptor } from './auth.interceptor';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';

import { FilterCheckboxListPipe } from './pipes/filter-checkbox-list.pipe';
import { DecimalCheckPipe } from './pipes/decimal-check.pipe';
import { CurrencyFormat } from './pipes/currency-format.pipe';

import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { OverlayModule } from '@angular/cdk/overlay';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';


@NgModule({
  declarations: [
    AppComponent,
    ProtectedComponent,
    AuthCallbackComponent,
    DialogContentExampleComponent,
    ReceiverComponent,
    TestNgbdModalContentComponent,
    RatingComponent,
    TestTabsComponent,
    ModalPopUpComponent,
    MyMatTableComponent,
    FilterCheckboxListPipe,
    DecimalCheckPipe,
    CurrencyFormat,
    ThinScrollComponent,
    MyMatAccordionComponent,
    MyMatDrawerComponent,
    TableViewComponent,
    ParentOneComponent,
    ParentTwoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    NgbModule,
    GridModule,
    PDFModule,
    ExcelModule,
    ChartsModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    CommonModule,
    CdkTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  exports: [
    MatDialogModule,
    MatTabsModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    
  ],
  providers: [AuthGuardService, AuthService, TestService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
  entryComponents: [TestNgbdModalContentComponent]
})
export class AppModule { }
