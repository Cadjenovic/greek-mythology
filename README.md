DISCLAIMER: First load will take ~50 seconds due to backend hosting service going "cold" after a period of inactivity. Give it some time and it will be perfectly nice and fast after the first load! :)

# greek-mythology
A place to explore deities of the Ancient Greece

Frontend (React) hosted on Netlify:
https://greek-mythology.netlify.app

API (Express) hostend on Render:
https://greek-mythology-vtz0.onrender.com

Database (MongoDB) hosted on Atlas.

API only has "/" and "/name" routes.

"/" route can take different query params, such as name, category, gender, limit etc.
"/name" can only take name query param, but unlike "/", which needs a full name, this route will return any name starting with the givien param.

A lot of lessons learned for future development and deployment...
