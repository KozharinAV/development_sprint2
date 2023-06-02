const swap = (array: Array<any>, firstIndex: number, secondIndex: number) => {
  const tempItem = array[firstIndex]
  array[firstIndex] = array[secondIndex]
  array[secondIndex] = tempItem
}
//Buble sort
export const bubleSort = (array: Array<any>, comparator: Function): Array<any> => {
  const sortedArray = [...array]
  if (sortedArray.length <= 1) return sortedArray
  for (let i = sortedArray.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (comparator(sortedArray[j], sortedArray[j + 1]) > 0) swap(sortedArray, j, j + 1)
    }
  }
  return sortedArray
}
//Selection sort
export const selectionSort = (array: Array<any>, comparator: Function): Array<any> => {
  const sortedArray = [...array]
  if (sortedArray.length <= 1) return sortedArray
  for (let i = 0; i < sortedArray.length - 1; i++) {
    let minItemIndex = i
    for (let j = i + 1; j < sortedArray.length; j++) {
      if (comparator(sortedArray[minItemIndex], sortedArray[j]) > 0) minItemIndex = j
    }
    swap(sortedArray, i, minItemIndex)
  }
  return sortedArray
}

// Insertion sort
export const insertionSort = (array: Array<any>, comparator: Function): Array<any> => {
  const sortedArray = [...array]
  if (sortedArray.length <= 1) return sortedArray
  for (let i = 1; i < sortedArray.length; i++) {
    const currentItem = sortedArray[i]
    let currentIndex = i
    while (currentIndex > 0 && comparator(sortedArray[currentIndex - 1], currentItem) > 0) {
      sortedArray[currentIndex] = sortedArray[currentIndex - 1]
      currentIndex--
    }
    sortedArray[currentIndex] = currentItem
  }
  return sortedArray
}

//Merge sorting
const merge = (leftArray: Array<any>, rightArray: Array<any>, comparator: Function) => {
  let joinedArray = []
  while (leftArray.length && rightArray.length) {
    if (comparator(leftArray[0], rightArray[0]) < 0) {
      joinedArray.push(leftArray.shift())
    } else {
      joinedArray.push(rightArray.shift())
    }
  }

  return [...joinedArray, ...leftArray, ...rightArray]
}

export const mergeSort = (array: Array<any>, comparator: Function): Array<any> => {
  const sortedArray = [...array]
  if (sortedArray.length < 2) {
    return sortedArray
  }
  const half = sortedArray.length / 2

  const left = sortedArray.splice(0, half)
  return merge(mergeSort(left, comparator), mergeSort(sortedArray, comparator), comparator)
}

//Heap sort
export const heapSort = (array: Array<any>, comparator: Function): Array<any> => {
  const sortedArray = [...array]
  if (sortedArray.length < 2) return sortedArray
  let currentLength = sortedArray.length,
    half = Math.floor(currentLength / 2),
    parentIndex,
    childIndex,
    currentItem
  while (true) {
    if (half > 0) currentItem = sortedArray[--half]
    else {
      currentLength--
      if (currentLength === 0) return sortedArray
      currentItem = sortedArray[currentLength]
      sortedArray[currentLength] = sortedArray[0]
    }
    parentIndex = half
    childIndex = parentIndex * 2 + 1
    while (childIndex < currentLength) {
      if (
        childIndex + 1 < currentLength &&
        comparator(sortedArray[childIndex + 1], sortedArray[childIndex]) > 0
      )
        childIndex++
      if (comparator(sortedArray[childIndex], currentItem) > 0) {
        sortedArray[parentIndex] = sortedArray[childIndex]
        parentIndex = childIndex
        childIndex = parentIndex * 2 + 1
      } else break
    }
    sortedArray[parentIndex] = currentItem
  }
}

//Quick sort
export const quickSort = (array: Array<any>, comparator: Function): Array<any> => {

  if (array.length < 2) {
    return array
  }

  const supportElement = array[array.length - 1]
  const leftArray = []
  const rightArray = []

  for (let i = 0; i < array.length - 1; i++) {
    if (comparator(array[i], supportElement) < 0) leftArray.push(array[i])
    else rightArray.push(array[i])
  }
  return [...quickSort(leftArray, comparator), supportElement, ...quickSort(rightArray, comparator)]
}

