import { Color } from '@ionic/core';
import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { arrowBackOutline, arrowForwardOutline, chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
export interface PageEvent {
  /* The current total number of items being paged */
  length: number;

  /* The current page index. */
  pageIndex: number;

  /* The current page size */
  pageSize: number;

  /* Index of the page that was selected previously. */
  previousPageIndex: number;
}
/**
 * This component is a UI to create paginated lists.
 */
@Component({
  tag: 'geov-paginator',
  styleUrl: 'geov-paginator.css',
  shadow: true,
})
export class GeovPaginator {
  /*  Whether to hide the page size selection UI from the user. */
  @Prop()
  hidePageSize: boolean;

  /*  The length of the total number of items that are being paginated. Defaulted to 0. */
  @Prop()
  length = 0;

  /*  The zero-based page index of the displayed list of items. Defaulted to 0. */
  @Prop({ mutable: true })
  pageIndex = 0;

  @Prop()
  pageSize = 25;

  /*  Whether to show the first/last buttons UI to the user. */
  @Prop()
  showFirstLastButtons = true;

  /*  Color of the paginator */
  @Prop()
  color: Color;

  /* Event emitted when the paginator changes the page size or page index. */
  @Event()
  pageChanged: EventEmitter<PageEvent>;

  previousPageIndex: number;

  render() {
    // number of pages
    const pageCount = Math.floor((this.length - 1) / this.pageSize) + 1;
    const isFirstPage = this.pageIndex <= 0;
    const isLastPage = this.pageIndex + 1 >= pageCount;
    const firstShownItem = this.pageIndex * this.pageSize + 1;
    const lastShownItem = this.pageIndex * this.pageSize + this.pageSize;
    return (
      <Host>
        <ion-item color={this.color} lines="none">
          {!this.hidePageSize && (
            <ion-note>
              {firstShownItem} – {lastShownItem}
              {/* Page {this.pageIndex + 1} of {pageCount.toString()}: */}
            </ion-note>
          )}
          <ion-buttons>
            {this.showFirstLastButtons && (
              <ion-button disabled={isFirstPage} onClick={() => this.changePageTo(0)}>
                <ion-icon slot="icon-only" icon={arrowBackOutline}></ion-icon>
              </ion-button>
            )}
            <ion-button disabled={isFirstPage} onClick={() => this.changePageTo(this.pageIndex - 1)}>
              <ion-icon slot="icon-only" icon={chevronBackOutline}></ion-icon>
            </ion-button>
            <ion-button disabled={isLastPage} onClick={() => this.changePageTo(this.pageIndex + 1)}>
              <ion-icon slot="icon-only" icon={chevronForwardOutline}></ion-icon>
            </ion-button>
            {this.showFirstLastButtons && (
              <ion-button disabled={isLastPage} onClick={() => this.changePageTo(pageCount - 1)}>
                <ion-icon slot="icon-only" icon={arrowForwardOutline}></ion-icon>
              </ion-button>
            )}
          </ion-buttons>
        </ion-item>
      </Host>
    );
  }

  changePageTo(newPageIndex: number) {
    const previousPageIndex = this.pageIndex;
    this.pageIndex = newPageIndex;
    this.pageChanged.emit({
      length: this.length,
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      previousPageIndex,
    });
  }
}
