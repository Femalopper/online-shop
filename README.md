[![Actions Status](https://github.com/Femalopper/online-shop-template/workflows/eslint-check/badge.svg?branch=main)](https://github.com/Femalopper/online-shop-template/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/28d20e82c76fef9dd29e/maintainability)](https://codeclimate.com/github/Femalopper/online-shop/maintainability)

## Description

Remastered version of adaptive and responsive online shop project - https://femalopper.github.io/frontend-project-onlineShop/src/html/main.html with the usage of online-shop-template (https://femalopper.github.io/online-shop-template/).

## Animation

![Main functionality](https://github.com/Femalopper/raw/blob/main/images/online-shop/Online-shop-template.gif)

## Setup

### 1\. Clone project

```sh
 git clone git@github.com:Femalopper/online-shop.git

 cd online-shop

 npm ci
```

---

### 2\. Change products description and add new products

```sh
  cd online-shop/src/data

  code goods.json
```

The file goods.json consists of information about products.
The following fields in the file must be filled:

| Field        | Description                                   |
| :----------- | :-------------------------------------------- |
| articul      | unique item number of the product             |
| title        | the name of the product                       |
| previousCost | the previous price of the product             |
| cost         | the price of the product                      |
| quantity     | number of pcs                                 |
| image        | name of the image with extension              |
| currency     | must be the same for all products             |
| description  | the list of strings, describing the product   |
| composition  | the list of strings, describing the materials |

---

### 3\. Download new products images

> All the images must be located in the img folder. Do not move img folder!

```sh
  cd online-shop/src/img
```

---

### 4\. Run app

```sh
  cd online-shop

  npm start
```
