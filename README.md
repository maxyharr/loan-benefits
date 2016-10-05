## README

### Steps to get up and running (assuming you have npm, node, and ruby installed on your machine)

#### Clone repo
- Follow these instructions for the easiest way to clone and already have it setup to track heroku
    - Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line) if you don't already have it
    - `heroku login` # Then enter your username and password and follow the prompts to create a new SSH public key
    - `heroku git:clone -a loan-benefits`
    - `cd loan-benefits`


#### Setup
- `bundle install`
- `rake db:create`
- `rails s -p 3001` # start rails server on port 3001
- `cd client`
- `npm install`
- `npm start` or `npm run start:hot` # start front-end development server with hmr

#### How does it work?
- 2 buildpacks are added to heroku - rails and node
- When a push is made it detects the node buildpack first and runs the package.json postinstall script from the root package.json file
    - This installs the node_modules
    - Runs the production build script which builds a `/dist` directory inside `/client`
    - Removes the rails `/public` directory, and then
    - Symlinks that `/client/dist` directory to `/public`
- Then it detects the rails buildpack and builds the rails project as per usual
- When it runs in production, it looks for the root `/public` directory and finds the `/client/dist` files all nicely smooshed together and uglified.
