class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // Конструктор принимает массив элементов и целое число, указывающее, сколько элементов помещается на одной странице
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    // Возвращает общее количество элементов в массиве.
    return this.collection.length;
  }
  pageCount() {
    // Возвращает количество страниц в массиве.
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    // Возвращает количество элементов на указанной странице. page_index отсчитывается с нуля.
    //  Если pageIndex находится вне диапазона, метод возвращает -1.
    const startIndex = pageIndex * this.itemsPerPage;
    const elOnPage = [...this.collection].splice(
      startIndex,
      this.itemsPerPage
    ).length;

    if (pageIndex < 0) {
      return -1;
    }
    return elOnPage ? elOnPage : -1;
  }
  pageIndex(itemIndex) {
    // Определяет, на какой странице находится элемент.
    // Если itemIndex находится вне диапазона, метод возвращает -1.

    if (itemIndex < 0 || itemIndex >= this.itemCount()) {
      return -1;
    }
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

//-------------Refactoring-------------
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    return this.collection.length;
  }
  pageCount() {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    const startIndex = pageIndex * this.itemsPerPage;
    const elOnPage = [...this.collection].splice(
      startIndex,
      this.itemsPerPage
    ).length;

    if (pageIndex < 0) {
      return -1;
    }
    return elOnPage ? elOnPage : -1;
  }
  pageIndex(itemIndex) {
    return itemIndex < 0 || itemIndex >= this.itemCount()
      ? -1
      : Math.floor(itemIndex / this.itemsPerPage);
  }
}

var helper = new PaginationHelper(
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ],
  10
);
helper.pageCount();
helper.itemCount();
helper.pageItemCount(-1);
helper.pageItemCount(1);
helper.pageItemCount(2);
helper.pageItemCount(3);

helper.pageIndex(22);
helper.pageIndex(40);
helper.pageIndex(3);
helper.pageIndex(0);
helper.pageIndex(-1);
helper.pageIndex(-23);
helper.pageIndex(-15);
