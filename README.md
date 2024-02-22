POS Malaysia Store
Project Overview
This project is a simple web application for POS Malaysia, showcasing a list of products that users can view and add to their cart. It features a product list in both list and grid views, product details including name, image, discount percent, and price, and a cart system for managing selected products. The project is built with Angular and uses GitLab for version control.

Features
Display products in a list or grid view.
Show basic information such as product name, image, discount percentage, and price.
Allow users to add products to a cart.
Cart screen to display added products, with persisted data in local storage.
Optional: Error handling for product images, product sorting/filtering, adjustable product quantities, and cost calculation.
Installation
To get the project up and running on your local machine, follow these steps:

Clone the repository

bash
Copy code
git clone <repository-abc>
cd pos-malaysia-store
Install dependencies

Ensure that you have Node.js and the Angular CLI installed. Then, run the following command in the project directory:

bash
Copy code
npm install
Environment Setup

No additional environment setup is required for the basic functionality. However, make sure to adjust the environments/environment.ts file for development and environments/environment.prod.ts for production builds if needed.

Running the Project
To start the development server, run:

bash
Copy code
ng serve
Navigate to http://localhost:4200/ to view the application. The app will automatically reload if you change any of the source files.

Building for Production
To build the project for production, run:

bash
Copy code
ng build --prod
This will create a dist/ directory with the compiled assets, optimized for production.

Additional Notes
State management and data persistence are handled with services and local storage to maintain the cart state across browser sessions.
To contribute to the project, please make sure to follow the established folder structure and coding standards, and create a new feature branch for each significant change.
Contact
For any queries or further instructions, please contact faizalPOSMalaysia on GitLab or the project administrator via email provided in the GitLab repository.#   P O S - T e s t - T a s k  
 