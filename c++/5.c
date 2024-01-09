  #include <stdio.h>          // 包含 printf 函數的標準輸入/輸出庫
  #include <stdlib.h>         // 包含動態記憶體分配的標準庫

  #define MAX_HEAP_SIZE 100   // 定義堆的最大大小

  // 交換堆中兩個元素的函數
  void swap(int *a, int *b) {
      int temp = *a;
      *a = *b;
      *b = temp;
  }

  // 插入元素後維護最大堆屬性的函數
  void heapifyDown(int arr[], int size, int index) {
      int leftChild = 2 * index + 1;   // 計算左子索引
      int rightChild = 2 * index + 2;  // 計算右子索引
      int largest = index;              // 假設當前節點是最大的

      // 求當前節點、左子節點、右子節點中最大的元素
      if (leftChild < size && arr[leftChild] > arr[largest]) {
          largest = leftChild;
      }

      if (rightChild < size && arr[rightChild] > arr[largest]) {
          largest = rightChild;
      }

      // 如果最大的元素不是當前節點，則與最大的子節點交換並繼續向下堆
      if (largest != index) {
          swap(&arr[index], &arr[largest]);
          heapifyDown(arr, size, largest);
      }
  }

  // 從數組建立最大堆的函數
  void buildMaxHeap(int arr[], int size) {
      // 從最後一個非葉節點開始，向下堆化到根
      for (int i = size / 2 - 1; i >= 0; i--) {
          heapifyDown(arr, size, i);
      }
  }

  // 顯示數組元素的函數
  void display(int arr[], int size) {
      printf("Array elements: ");
      for (int i = 0; i < size; i++) {
          printf("%d ", arr[i]);  // 列印數組中的每個元素
      }
      printf("\n");
  }

  int main() {
      // 使用隨機數組進行測試
      int randomArray[] = {6, 8, 12, 7, 1};               // 聲明一個隨機數組
      int randomSize = sizeof(randomArray) / sizeof(randomArray[0]);  // 計算數組的大小

      printf("Original Random Array:\n");
      display(randomArray, randomSize);  // 顯示原始隨機數組

      // 從隨機數組建立最大堆
      buildMaxHeap(randomArray, randomSize);

      printf("Max Heap from Random Array:\n");
      display(randomArray, randomSize);  // 顯示隨機數組中的最大堆

      // 使用排序數組進行測試
      int sortedArray[] = {19, 12, 8, 6, 2};              // 聲明一個排序數組
      int sortedSize = sizeof(sortedArray) / sizeof(sortedArray[0]);  // 計算數組的大小

      printf("\nOriginal Sorted Array:\n");
      display(sortedArray, sortedSize);  // 顯示原始排序數組

      // 從排序數組建立最大堆
      buildMaxHeap(sortedArray, sortedSize);

      printf("Max Heap from Sorted Array:\n");
      display(sortedArray, sortedSize);  // 顯示排序數組中的最大堆

      return 0;                         // 返回0表示執行成功
  }