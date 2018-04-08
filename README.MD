# What is Tiny-API

 A very simple api written in less than 50 lines of code. It's only purpose is a quick mock api, you can use for frontend systems. 
 
# How do I use it?

Simply install the packages.

```
  npm install
```

Start the service

```
  npm start
```	

Start hitting the api with Postman: `http://localhost:3000`

# Where is the data?
Data is reset every time you restart the service, but the seed data is loaded in `server_data.js`

# Methods available?
1) GET '/' - List all the items in the collection.
2) GET '/:id' - Read a record with that Id.
3) PUT '/' - Insert an item into the collection.
4) DELETE '/:id' - Delete a record with that Id.

# Anything missing?
Yeah, POST. This was just a demonstration project, so I dont care if it is missing features. Add em if you want.