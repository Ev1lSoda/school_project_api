# school_project_api

To run this API and use it you need 2 things:

1. to load the dump file back into the server:
2. install all node packages

To do so run `npm install` in main directory of the project and `mysql -u(your username for local instance MySQL) -p(your password for local instance MySQL)` in "SQL" directory

After doing this steps you will be able to run program just type `npm start`, when it starts you will see 2 arrays, first one is "getAllTeachers" it represents list of all teachers in DB and the second one is "getTargetMathTeachers" it is a list of math teachers that is chousen by the rules in task.

Then you could make some requests to API, I recommend you to use Postman, I also have a collection of all requests in "postman_collection" folder. Program has 5 requests, 4 is for CRUD and 1 is for "getTargetMathTeachers" method, I will shortly demonstrate them:

1. Add(Create) new teacher in DB:
   ![Image of Create request](https://github.com/Ev1lSoda/school_project_api/blob/master/Postman1.png)
   Here we added art teacher Robin Robinson to our DB.
2. Read(get) teacher(s) info from DB, here we insert the parameter by which we want to get teacher(s):
   ![Image of Read request](https://github.com/Ev1lSoda/school_project_api/blob/master/Postman2.png)
   Here we get all teachers aged 88,
   **to get all teachers you should send empty teacher object `{teacher{}}`**
3. Update teacher, this request takes "teacherId" parameter to find wich row should be modified:
   ![Image of Update request](https://github.com/Ev1lSoda/school_project_api/blob/master/Postman3.png)
   Here we changed Robin Robinson from being art teacher to english teacher.
4. Delete tacher, this request takes only one parameter "teacherId", so you can only delete one teacher by one request:
   ![Image of Delete request](https://github.com/Ev1lSoda/school_project_api/blob/master/Postman4.png)
   Here we deleted our teacher Robin Robinson.
5. getTargetMathTeacher, get specified math teachers:
   ![Image of getTargetMathTeacher request](https://github.com/Ev1lSoda/school_project_api/blob/master/Postman5.png)

school DB EER Diagram
![Image of DB model](https://github.com/Ev1lSoda/school_project_api/blob/master/DB_model.png)
