import React from 'react';

export interface Pagable {
  page: number;
  limit: number;
  order: string;
  sort: string; //updatetime;
}

export abstract class BaseListLogic<T> {
  items: T[] = [];
  setListFn: React.Dispatch<T[]>;
  form: any;
  pagable: Pagable = {
    page: 0,
    limit: 10,
    order: '',
    sort: '',
  };
  isLimited: boolean = false;
  isLoading: boolean = false;

  constructor(setListFn: React.Dispatch<T[]>, items: T[]) {
    this.setListFn = setListFn;
    this.items = items;
  }

  abstract loadData_(form: any, pagable: Pagable): Promise<T[]>;

  abstract getKey(item: T, index: number): any;

  loadData() {
    this.isLimited = false;
    this.pagable.page = 0;
    this.setListFn([]);
    this.isLoading = true;
    return this.loadData_(this.form, this.pagable).then(items => {
      if (items && items.length) {
        // this.items.push(...items);
        this.pagable.page++;
        this.setListFn(items);
        this.isLimited = items.length < this.pagable.limit;
        this.isLoading = false;
      }
    });
  }

  doSearch(form: any) {
    this.form = form;
    this.loadData();
  }
}
