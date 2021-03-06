# uber Eats

The Backend of uber Eatss Clone

## User Entity:

- id
- createdAt
- updatedAt

- email
- password
- role(client|owner|delivery)

## Restaurant Model
- name
- category
- address
- coverImage

- Edit Restaurant
- Delete Restaurant
- 
- See Categpories
- See Restaurants by Category (pagination)
- See Restaurants (pagination)
- See Resturant
- Search Restaurant

- Create Dish
- Edit Dish
- Delete Dish

## Orders CRUD
- Order CRUD
- Order Subscription(Owner, Customer, Delivery)
    - Pending Orders (Owner) (s:newOrder) (t: createOrder(newOrder))
    - order status (customer,Delivery,Owner) (s: orderUpdate) (t: editOrder(orderUpdate))
    - Pending Pickup Order (Delivery) (s:orderUpdate) (t: editOrder(orderUpdate))

## Payments
- Payments ( CRON )