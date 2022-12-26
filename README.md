# TestJavan

##installation :
1. clone project
2. run npm install
3. create database postgresql with name 'family_assets_javan'
4. setup environment variable like database in .env file
5. run npm start

##Entry point :
1. http://localhost:port/families -> (GET) get members family
2. http://localhost:port/families -> (POST) post members family -> example body({"name" : "jhon", "gender" : "male", "id_parent" : 2})
3. http://localhost:port/families/:id -> (PUT) update members family -> example body({"name" : "jhon", "gender" : "male", "id_parent" : 2})
4. http://localhost:port/families/:id -> (DELETE) delete members family

