export function checkDelay(searchValue: string, pageSearch: number, page: number, index: number, countCard: number) {
  if (searchValue) {
    return pageSearch ? (index - pageSearch * countCard) * 0.1 : index * 0.1
  } else {
    return page ? (index - page * countCard) * 0.1 : index * 0.1
  }
}
