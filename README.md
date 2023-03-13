# E-commerce Back End [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
E-commerce Back End project is a functional Express.js API that uses Sequelize to create and modify tables in a MySQL database for e-commerce. For this project, Insomnia Core is used to test endpoints to GET, POST, PUT and DELETE.\
This API allows users to see, add, update and/or delete Categories, Products and products' Tags.\
This project is part of a challenge from Full Stack Coding Bootcamp at the University of Minnesota.


## Installation

For this application, please use https://nodejs.org/en/ to install Node.js (version 16 is recommended).\
Run `npm i` in the terminal to install dependencies dotenv, Express, MySQL2 and Sequelize and Nodemon.

## Usage
To get access to the database to manage and view data, user needs to do the following:
1. Clone this project's repository to local machine by using SSH Key `git@github.com:BiaJorgensen/e-commerce-backend.git`
1. Use .env.EXAMPLE in the Develop folder to enter your MySQL username and password (remane file to remove .EXAMPLE)
1. To create the database:
    * In the CLI, navigate to db folder (./Develop/db)
    * Type `mysql -u root -p`
    * Enter your password
    * Type SOURCE schema.sql
1. To seed data to the database:
    * In the CLI, navigate to the Develop folder
    * Type `npm run seed`
1. To connect to server:
    * In the CLI, navigate to server.js (./Develop/server.js)
    * Type `npm i` to guarantee dependencies are installed
    * Type `npm start`
1. After doing the steps above, open the Insomnia app.
    * To GET, POST, PUT and/or DELETE Category:
        * GET `http://127.0.0.1:3001/api/categories` (to see all categories)
        * GET `http://127.0.0.1:3001/api/categories/{:id}` (to see a category)
        * POST `http://127.0.0.1:3001/api/categories` (adds new Category)
            * Use { "category_name" : "_new category name_" } in Body JSON
        * PUT `http://127.0.0.1:3001/api/categories/{:id}` (to update a category)
            * In Body JSON:<br/>
            {<br/>
            "category_name" : "_updated category name_"<br/>
            }
        * DELETE `http://127.0.0.1:3001/api/categories/{:id}` (to delete a category)
        <br/><br/>
    * To GET, POST, PUT and/or DELETE Product:
        * GET `http://127.0.0.1:3001/api/products` (to see all products)
        * GET `http://127.0.0.1:3001/api/products/{:id}` (to see a product)
        * POST `http://127.0.0.1:3001/api/products` (adds new product)
            * In Body JSON:<br/>
            {<br/>
            "product_name": "_new product name_",<br/>
            "price": "_product price_",<br/>
            "stock": "_quantity in stock_",<br/>
            "tagIds": ["_array of tags for the product_"]<br/>
            }
        * PUT `http://127.0.0.1:3001/api/products/{:id}` (to update a product)
             * In Body JSON:<br/>
            {<br/>
            "product_name": "_updated product name_",<br/>
            "price": "_updated product price_",<br/>
            "stock": "_updated quantity in stock_",<br/>
            "tagIds": ["_updated array of tags for the product_"]<br/>
            }
        * DELETE `http://127.0.0.1:3001/api/products/{:id}` (to delete a product)
        <br/><br/>
    * To GET, POST, PUT and/or DELETE Tag:
        * GET `http://127.0.0.1:3001/api/tags` (to see all tags)
        * GET `http://127.0.0.1:3001/api/tags/{:id}` (to see a tag)
        * POST `http://127.0.0.1:3001/api/tags` (adds new tag)
            * In Body JSON:<br/>
            {<br/>
            "tag_name": "_new tag name_",<br/>
            }
        * PUT `http://127.0.0.1:3001/api/tags/{:id}` (to update a tag)
             * In Body JSON:<br/>
            {<br/>
            "tag_name": "_updated tag name_",<br/>
            }
        * DELETE `http://127.0.0.1:3001/api/tags/{:id}` (to delete a tag)
        

## Credits

N/A

## License

The license for this project is **The MIT License**<br>
To learn more about this license, please access https://opensource.org/licenses/MIT

## Walkthrough Video
[Link to the walkthrough video](https://drive.google.com/file/d/1NceHgYAmyTJ4ifvCvPzL1rO_bsVq4WDP/view?usp=sharing)