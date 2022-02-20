import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgScrollbarModule } from 'ngx-scrollbar'

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
import { ExpandableTableComponent } from './expandable-table/expandable-table.component';
import { PrimeTableComponent } from './prime-table/prime-table.component';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { BadgeModule } from 'primeng/badge';
import {ToggleButtonModule} from 'primeng/togglebutton';

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

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { AddDynamicRowComponent } from './add-dynamic-row/add-dynamic-row.component';
import { AddRowDirective } from './directives/add-row.directive';
import { NewAddRowComponent } from './new-add-row/new-add-row.component';
import { PhoneNumberDirective } from './shared/directives/phone-number.directive';
import { CheckboxModule } from 'primeng/checkbox';
import { ResponsiveTableComponent } from './responsive-table/responsive-table.component';
import { MyPrimengSelectionTableComponent } from './my-primeng-selection-table/my-primeng-selection-table.component';

import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { TempChildComponent } from './temp-child/temp-child.component';
import { MultipleExpansionPanelComponent } from './multiple-expansion-panel/multiple-expansion-panel.component';

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
    ParentTwoComponent,
    ExpandableTableComponent,
    PrimeTableComponent,
    AddDynamicRowComponent,
    AddRowDirective,
    NewAddRowComponent,
    PhoneNumberDirective,
    ResponsiveTableComponent,
    MyPrimengSelectionTableComponent,
    FormValidationComponent,
    TempChildComponent,
    MultipleExpansionPanelComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    NgScrollbarModule,
    MatDatepickerModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    FormsModule,
    RatingModule,
    BadgeModule,
    ToggleButtonModule,
    CheckboxModule,
    ConfirmDialogModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
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
    ScrollingModule

  ],
  providers: [AuthGuardService, AuthService, TestService, MessageService, ConfirmationService,
    InMemoryDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
  entryComponents: [TestNgbdModalContentComponent]
})
export class AppModule { }
