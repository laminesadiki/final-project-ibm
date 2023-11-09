# Add env.json file including this data :
```json
{
  "SERVER_PORT": "",
  "SERVER_HOST": "",
  "DB_HOST": "",
  "DB_USER": "",
  "DB_PASSWORD": "",
  "DB_NAME": "",
  "DB_DIALECT": "",
  "POOL": {
    "max": "",
    "min": "",
    "acquire": "",
    "idle": ""
  }
}
```

# Test endpoint and API
GET /

GET /api

# Products API
### Get All Products
GET /api/products/read

### Get published products
GET /api/products/read/published

### Get product users
GET /api/products/read/users/:id

### Get One Product
GET /api/products/read/:id

### Add a product
POST /api/products/create

**request body**
```json
{
  "title": "product 1",
  "description": "description of product 1",
  "price": 7000,
  "published": false
}
```

### Update a product
PUT /api/products/update/:id

**request body**
```json
{
  "title": "product 2",
  "description": "description of product 2",
  "price": 8000,
  "published": true
}
```

### Delete a product
DELETE /api/products/delete/:id

# Users API
### Get All Users
GET /api/users/read

### Get One User
GET /api/users/read/:id

### Add a user
POST /api/users/create

**request body**
```json
{
  "product_id": 1,
  "rating": 17,
  "description": "description of rating 17"
}
```

### Update a user
PUT /api/users/update/:id

**request body**
```json
{
  "product_id": 1,
  "rating": 20,
  "description": "description of rating 20"
}
```

### Delete a user
DELETE /api/users/delete/:id
