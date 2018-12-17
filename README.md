# sollarshome_backend

## To Run Development version:

1. download or clone to your local environment
2. CLI: npm install
3. make sure you have postgreSQL installed and running
4. CLI: createdb sollars-dev
5. CLI: knex migrate:latest
6. CLI: knex seed:run
7. nodemon   (should default to localhost:3000/)
8. send cli requests via httpie or curl... alternatively use Postman

### Active Routes:

* users                     - shows all users
* users/:id                 - shows user details
                              Create, Read, Update, Delete (CRUD)
---
* items                     - shows all items
* items/:id                 - shows specific item data (CRUD)
---
* orders                    - shows all orders
* orders/details/:id        - shows items per order
* orders/:id                - shows  admin data per order (CRUD)
---
* comments                  - shows all comments
* comments/attachedTo/:id   - shows all comments attached to an entity
                              (e.g. order, schedule, message, report)
* comments/:id              - shows specific comment with user name