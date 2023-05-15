# Client Side Codebase

Hi! I'm Anshik Singh. The Technologies I used for frontend or client side are nextjs and tailwindcss (for css).


## Codebase Directories Explaination


### app 
app directory containes all the components which are going to use create a interactive web page. The components are divide according to their usage to their work in web application.
`app/page.tsx` Home page of the website. It is using `app/components, app/layout.txs` directories to work.
`app/signup` This directory contains the code of signup page, 
`app/login` This directory contains the code of login page, 
`app/user` This directory codebase is only accessible if the user is logged in. This directory contains the code of dashboard of login user.
`app/upload` This directory codebase is also accessible to logged in users. This codebase is used to upload content of user.
`app/creators` This directory contains code of the user profile which is accessible to every one.
### lib
lib directory contains all the function to fetch data from backend according to user request.
### next.config.js 
This file contains the configuration like url to backend , image fetching source and others for client side.