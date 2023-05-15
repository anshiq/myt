# Server Side Codebase

Hi! I'm Anshik Singh. The Technologies I used for backend or server side are nodejs (expressjs) and mongdb as database.


## Codebase Directories Explaination


### app.js 
This file containes code to start server, api routes and some important middlewares (like cors, express-fileupload and dotenv).

### routes/tasks.js
This file contain the extented routes from app.js according to their working . Each route has it own working. When ever a route is accessed it execute the functions present in `controllers/function.js`.
### db/connect.js 
This file contains the some configuration for how to connect with mongodb (using mongoose for ease).
### models/schema.js
The file contains schema for data store in database.
### images and videos Directory
These directory will contain the images and video uploaded by user.