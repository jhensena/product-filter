export class Pagination<T> {
  total = 0;
  data: Array<T> = [];

  constructor(data?: Partial<Pagination<T>>) {
    Object.assign(this, data);
  }
}
