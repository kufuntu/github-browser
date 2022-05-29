import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements OnInit {
  @Input() placeholder: string = 'Search...';
  @Output() search = new EventEmitter<string>();
  private searchAsYouType = new Subject<string>();
  private textValue: string = '';
  private searchAsYouTypeSubscription?: Subscription;

  ngOnInit() {
    this.searchAsYouTypeSubscription = this.searchAsYouType
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((newValue) => {
        this.search.emit(newValue);
      });
  }

  onEnter(_event: Event) {
    this.search.emit(this.textValue);
  }

  onInput(e: Event) {
    this.textValue = (e.target as HTMLInputElement).value;
    this.searchAsYouType.next(this.textValue);
  }

  ngOnDestroy() {
    if (this.searchAsYouTypeSubscription) {
      this.searchAsYouTypeSubscription.unsubscribe();
    }
  }
}
