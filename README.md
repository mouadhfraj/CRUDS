# Product Management Application

This is a simple web application built using vanilla JavaScript that allows users to manage products. Users can add, update, delete, and search for products, and the data is stored locally in the browser using `localStorage`.

## Features

- **Add Product**: Users can add new products with details like title, price, taxes, ads, discount, count, and category.
- **Update Product**: Allows users to edit existing products.
- **Delete Product**: Users can delete individual products or clear all products.
- **Search Products**: Users can search products by title or category.
- **Calculate Total Price**: Automatically calculates the total price based on product details (price, taxes, ads, discount).

## Technologies Used

- **HTML**: To structure the page.
- **CSS**: For styling the application.
- **JavaScript**: For handling product management logic and data manipulation.
- **localStorage**: To store product data persistently in the browser.

## How It Works

### Adding Products
- Fill in the product details (title, price, taxes, ads, discount, count, and category) and click **Submit** to add the product.
- The total price is automatically calculated based on the entered data.

### Updating Products
- Click the **Update** button next to a product to modify its details.
- The product's details will be pre-filled, and you can edit and save the changes.

### Deleting Products
- Click the **Delete** button next to a product to remove it from the list.
- You can also delete all products using the **Delete All** button.

### Searching Products
- You can search for products by either **Title** or **Category**.
- The search box allows you to filter products based on your search criteria.

### Data Storage
- All product data is stored in the browser's `localStorage`, so the data persists even if the page is refreshed.

## Code Explanation

### Product Object
The application stores each product as an object with the following properties:
- `title`: The name of the product.
- `price`: The base price of the product.
- `taxes`: Additional taxes applied to the product.
- `ads`: Advertisement cost for the product.
- `discount`: Discount applied to the product.
- `total`: The calculated total price of the product (price + taxes + ads - discount).
- `count`: The quantity of the product.
- `category`: The category the product belongs to.

### Functions

- `gettotal()`: Calculates the total price of the product based on the provided details and updates the `total` field.
- `cleardatainput()`: Clears all input fields after a product is added or updated.
- `showdata()`: Displays all products in a table format.
- `deletedata(i)`: Deletes a specific product from the list.
- `deleteall()`: Clears all products from the list and `localStorage`.
- `updatedata(i)`: Pre-fills the product details for editing.
- `searchdata(value)`: Filters products based on the search value entered by the user.

## Setup Instructions

To run this application:

1. Clone or download the repository.
2. Open the `index.html` file in a browser.

No additional setup is required as it is a client-side application using `localStorage` for data persistence.

## Contributions

Feel free to fork the project and submit pull requests with improvements or bug fixes!
