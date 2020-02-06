import Component from '@ember/component';
import { computed, get, set } from '@ember/object';

export default Component.extend({
  meta: '',
  firstEllipsis: false,
  lastEllipsis: false,
  numberOfPages: computed('page', function () {
    return this.meta.pagination.total_pages
  }),

  initialPageNumbers: computed('numberOfPages', function () {
    let pageNumber = get(this, 'page');
    if (this.numberOfPages <= 5) {
      return this.generatePages(1, get(this, 'numberOfPages'));
    } else if (this.numberOfPages > 5 && this.page === 1) {
      return this.generatePages(pageNumber, 3)
    } else {
      return [1]
    }
  }),

  middlePageNumbers: computed('page', function () {
    if (this.numberOfPages <= 5) {
      return [];
    }

    if (this.page === 1 || this.page === this.numberOfPages ) {
      return [];
    } else if (this.numberOfPages - this.page > 2) {
      return this.generatePages(this.page, 3);
    }
  }),

  lastPageNumbers: computed('page', function () {
    let pageNumber = get(this, 'numberOfPages');
    const diff = this.numberOfPages - this.page;

    if (this.numberOfPages <= 5) {
      return [];
    }

    if (diff !== 0 && diff > 2 ) {
      return [this.numberOfPages]
    }
    return this.generatePages(pageNumber, 3, 'decrement').reverse();
  }),

  showFirstEllipsis: computed('numberOfPages', 'page', function () {
    return this.numberOfPages > 5;
  }),

  showSecondEllipsis: computed('page', 'middlePageNumbers', function () {
    return this.middlePageNumbers && this.middlePageNumbers.length >  0;
  }),

  goBack: computed('page', function () {
    return this.page !== 1;
  }),

  goForward: computed('page', function () {
    return this.page !== this.numberOfPages;
  }),

  generatePages: function (page, length, operator) {
    let pageNumbers = Array(length);
    for(let count = 0; count < length; count++) {
      pageNumbers[count] = page;
      operator !== 'decrement' ? page++ : page --;
    }
    return pageNumbers
  },

  actions: {
    pageClicked(pageNumber) {
      set(this, 'page', pageNumber)
    }
  }
});
