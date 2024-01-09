#include <stdio.h>
#include <stdlib.h>

int main() {
    int fno, sno, *ptr1 = &fno, *ptr2 = &sno;

    printf("\n\n Pointer : Find the maximum number between two numbers :\n");
    printf("------------------------------------------------------------\n");

    printf(" Input the first number : ");
    scanf("%d", ptr1); // 讀取使用者的第一個數字並使用 ptr1 儲存它
    printf(" Input the second number : ");
    scanf("%d", ptr2); // 從用戶那裡讀取第二個數字並使用 ptr2 儲存它

    // 比較ptr1和ptr2指向的值，找出最大數
    if (*ptr1 > *ptr2) {
        printf("\n\n %d is the maximum number.\n\n", *ptr1); // 列印最大數量
    } else {
        printf("\n\n %d is the maximum number.\n\n", *ptr2); //列印最大數量
    }
    return 0;
}