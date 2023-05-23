export const simpleComparator = (a: any, b: any): number => {
  if (a < b) return -1
  if (a === b) return 0
  return 1
}
