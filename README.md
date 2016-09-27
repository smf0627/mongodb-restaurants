# Restaurants Exercise

### Inserting a new Restaurant 

Use the documation for [MongoDB's insert](http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#insertOne) to insert your favorite restaurant.  The json for the object looks like this: 

**Restaurant JSON**

```json
{
	"address" : {
    	"street" : "",
        "zipcode" : "",
         "building" : "",
         "coord" : [  ]
      },
      "borough" : "",
      "cuisine" : "",
      "grades" : [
         {
            "date" : ISODate("2014-10-01T00:00:00Z"),
            "grade" : "",
            "score" : 
         }
      ],
      "name" : ""
   }
}
```

Observe what type of infomration is returned from an insert statement?  Fill in the code in the insert.js file.  Return the results of the insert statement.  

### Query your favorite restaurant by their name.

Open up the query.js file and fill in the query for the findByName(name).


## References

* [MongoDB Node API](http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#insertOne)
* [MongoDB API](https://docs.mongodb.com/getting-started/shell/insert/)