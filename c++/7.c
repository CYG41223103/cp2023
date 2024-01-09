// 包括必要的頭文件
#include <stdio.h>
#include <stdlib.h>

// 二元樹節點的結構
struct TreeNode {
    int data;
    struct TreeNode* left;
    struct TreeNode* right;
};

// 建立新節點的函數
struct TreeNode* createNode(int value) {
    struct TreeNode* newNode = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    if (newNode != NULL) {
        newNode->data = value;
        newNode->left = NULL;
        newNode->right = NULL;
    }
    return newNode;
}

// 向二元樹插入節點的函數
struct TreeNode* insertNode(struct TreeNode* root, int value) {
    if (root == NULL) {
        return createNode(value);
    }

    if (value < root->data) {
        root->left = insertNode(root->left, value);
    } else if (value > root->data) {
        root->right = insertNode(root->right, value);
    }

    return root;
}

// 執行有序遍歷和列印元素的函數
void inOrderTraversal(struct TreeNode* root) {
    if (root != NULL) {
        inOrderTraversal(root->left);
        printf("%d ", root->data);
        inOrderTraversal(root->right);
    }
}

// 建立二元樹鏡像的函數
struct TreeNode* mirrorTree(struct TreeNode* root) {
    if (root == NULL) {
        return NULL;
    }

    // 交換左右子樹
    struct TreeNode* temp = root->left;
    root->left = mirrorTree(root->right);
    root->right = mirrorTree(temp);

    return root;
}

// 釋放為二元樹分配的記憶體的函數
void freeTree(struct TreeNode* root) {
    if (root != NULL) {
        freeTree(root->left);
        freeTree(root->right);
        free(root);
    }
}

int main() {
    struct TreeNode* root = NULL;
    int nodeValue;
    char choice;

    // 將節點插入二元樹
    do {
        printf("Input a value to insert into the binary tree (enter 0 to stop): ");
        scanf("%d", &nodeValue);

        if (nodeValue != 0) {
            root = insertNode(root, nodeValue);
        }

    } while (nodeValue != 0);

    //列印原始二元樹
    printf("\nOriginal Binary Tree (In-order Traversal): ");
    inOrderTraversal(root);
    printf("\n");

    // 建立並列印二元樹的鏡像
    struct TreeNode* mirroredRoot = mirrorTree(root);
    printf("\nMirrored Binary Tree (In-order Traversal): ");
    inOrderTraversal(mirroredRoot);
    printf("\n");

    // 釋放分配的記憶體
    freeTree(root);
    freeTree(mirroredRoot);

    return 0;
}