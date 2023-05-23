import {
  bubleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  heapSort,
  quickSort,
} from "./src/sorting-algorithms/algorithms"
import { simpleComparator } from "./src/sorting-algorithms/comparators"

let testArrayNumber = [4, 7, 1, 9, 56, 9]
let testArrayString = ["world", "hello", "awesome,"]

console.log("---------")

console.log("Buble sorting")
console.log(bubleSort(testArrayString, simpleComparator).join(" "))
console.log(bubleSort(testArrayNumber, simpleComparator))

console.log("---------")

console.log("Selection sorting")
console.log(selectionSort(testArrayString, simpleComparator).join(" "))
console.log(selectionSort(testArrayNumber, simpleComparator))

console.log("---------")

console.log("Insertion sorting")
console.log(insertionSort(testArrayString, simpleComparator).join(" "))
console.log(insertionSort(testArrayNumber, simpleComparator))

console.log("---------")

console.log("Merge sorting")
console.log(mergeSort(testArrayString, simpleComparator).join(" "))
console.log(mergeSort(testArrayNumber, simpleComparator))

console.log("---------")

console.log("Heap sorting")
console.log(heapSort(testArrayString, simpleComparator).join(" "))
console.log(heapSort(testArrayNumber, simpleComparator))

console.log("---------")

console.log("Quick sorting")
quickSort(testArrayString, simpleComparator)
quickSort(testArrayNumber, simpleComparator)
console.log(testArrayString.join(" "))
console.log(testArrayNumber)
