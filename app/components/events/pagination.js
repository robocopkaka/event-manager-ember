import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PaginationComponent extends Component{
  @tracked page = this.args.page;
  meta = this.args.meta;
  numberOfPages = parseInt(this.meta.pagination.total_pages, 10)

  get initialPageNumbers() {
    let pageNumber = this.page;
    if (this.numberOfPages <= 5) {
      return this.generatePages(1, this.numberOfPages);
    } else if (this.numberOfPages > 5 && this.page === 1) {
      return this.generatePages(pageNumber, 3)
    } else {
      return [1]
    }
  }

  get middlePageNumbers() {
    if (this.numberOfPages <= 5) {
      return [];
    }

    if (this.page === 1 || this.page === this.numberOfPages ) {
      return [];
    } else if (this.numberOfPages - this.page > 2) {
      return this.generatePages(this.page, 3);
    }
  }

  get lastPageNumbers() {
    let pageNumber = this.numberOfPages;
    const diff = this.numberOfPages - this.page;

    if (this.numberOfPages <= 5) {
      return [];
    }

    if (diff !== 0 && diff > 2 ) {
      return [this.numberOfPages]
    }
    return this.generatePages(pageNumber, 3, 'decrement').reverse();
  }

  get showFirstEllipsis() {
    return this.numberOfPages > 5;
  }

  get showSecondEllipsis() {
    return this.middlePageNumbers && this.middlePageNumbers.length >  0;
  }

  get goBack() {
    return this.page !== 1;
  }

  get goForward() {
    return this.page !== this.numberOfPages;
  }

  generatePages(page, length, operator) {
    let pageNumbers = Array(length);
    for(let count = 0; count < length; count++) {
      pageNumbers[count] = page;
      operator !== 'decrement' ? page++ : page --;
    }
    return pageNumbers
  }

  @action
  pageClicked(pageNumber) {
    this.page = pageNumber;
  }
}
