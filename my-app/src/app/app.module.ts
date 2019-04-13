import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


@NgModule({@NgModule({ declarations: [   AppComponent ], imports: [ CommonModule, HttpModule, ScheduleAllModule, RecurrenceEditorAllModule,   NumericTextBoxAllModule, DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule, CheckBoxAllModule, ToolbarAllModule,   DropDownListAllModule, ContextMenuAllModule, MaskedTextBoxModule, UploaderAllModule, MultiSelectAllModule, BrowserModule], providers: [], bootstrap: [AppComponent]
})
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
