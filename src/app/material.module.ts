import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule, MatStepperIntl } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import {
  MatPaginatorModule,
  MatPaginatorIntl,
} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';
const materialModules = [
  FlexLayoutModule,
  MatIconModule,
  MatButtonToggleModule,
  MatRadioModule,
  MatSidenavModule,
  MatToolbarModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatCardModule,
  MatStepperModule,
  MatTooltipModule,
  MatListModule,
  MatSnackBarModule,
  MatDividerModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatMenuModule,
  MatTableModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatDialogModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatBadgeModule,
  MatGridListModule,
  MatChipsModule,
  MatTabsModule,
  ScrollingModule,
  ClipboardModule,
  MatSlideToggleModule,
];

@NgModule({
  exports: materialModules,
  providers: [],
})
export class MaterialModule {}
