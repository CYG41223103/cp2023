#include <stdio.h>

// 用於堆化以節點 i 為根的子樹的函數，該節點是 arr[] 中的索引
void minHeapify(int arr[], int n, int i) {
    int smallest = i;  // 將最小的初始化為 root
    int left = 2 * i + 1;  // 左子節點
    int right = 2 * i + 2; // 右子節點

    // 如果左子節點小於根
    if (left < n && arr[left] < arr[smallest])
        smallest = left;

    // 如果右子節點小於目前為止最小的子節點
    if (right < n && arr[right] < arr[smallest])
        smallest = right;

    // 如果最小的不是根
    if (smallest != i) {
        // 將找到的最小元素與根交換
        int temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;

        // 遞歸地堆化受影響的子樹
        minHeapify(arr, n, smallest);
    }
}

// 從數組建立最小堆的函數
void buildMinHeap(int arr[], int n) {
    // 從最後一個非葉子節點開始，以相反的順序堆疊所有節點
    for (int i = n / 2 - 1; i >= 0; i--)
        minHeapify(arr, n, i);
}

// 列印數組的函數
void printArray(int arr[], int n) {
    for (int i = 0; i < n; ++i)
        printf("%d ", arr[i]);
    printf("\n");
}

// 測試堆構造函數
int main() {
    // 使用隨機數組進行測試
    int randomArray[] = {4, 10, 3, 5, 1};
    int n1 = sizeof(randomArray) / sizeof(randomArray[0]);

    printf("Original Random Array: ");
    printArray(randomArray, n1);

    // 建構堆
    buildMinHeap(randomArray, n1);

    printf("Min Heap from Random Array: ");
    printArray(randomArray, n1);

    printf("\n");

    // 使用排序數組進行測試
    int sortedArray[] = {8, 7, 5, 4, 2};
    int n2 = sizeof(sortedArray) / sizeof(sortedArray[0]);

    printf("Original Sorted Array: ");
    printArray(sortedArray, n2);

    // 建構堆
    buildMinHeap(sortedArray, n2);

    printf("Min Heap from Sorted Array: ");
    printArray(sortedArray, n2);

    return 0;
}