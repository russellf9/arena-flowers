# Arena Flowers
A repo for a _"Landing Page"_ FED test

## Description:

Pretend Arena Flowers has written an ebook called the Ultimate Guide to Flowers. It's beautiful. It's got nice tips and tricks on how to buy the right flowers

As a promotion, we want to give the ebook away for free, but the user needs to fill in two pieces of information:

- Email
- Post code

Your task, should you choose to accept it, is to create a landing page that accepts these two data points, and then allow the user to download the guide. The landing page should be compelling and make them actually *want* to give us their email and post code so they get the Ultimate Guide to Flowers


## Requirements:
- Build a landing page with information about the guide (You can use lorem epsom, but it needs to be presented in a nice way)

- Form field for email

- Form field for post code

- Download button (In order to download, the email and post code *must* be filled in).

- Code the page up using whatever methods you choose

- Put code and final assets on github

## Bonus:
- Deploy your code (on heroku/s3 or AWS)

- Validate email address/post code

- If the post code is within 5 miles of the ArenaFlowers office (W6 0NB), then show an amazing parallax/animated/something funny graphic that let's them know how close they are to greatness.

- Code it up in ruby, php, ocaml, or whatever language you want and store the information collected in a database
Send a message to the email collected with a 'Thanks' message

## Conclusion:
- You may use whatever tools, colours, technologies you see fit. Take as much time as you need.

- Tip: it is better to do a few things well vs trying to do all of the above in the same time.


## App setup

I create a Yeoman Gulp as [generator-gulp-webapp](https://github.com/yeoman/generator-gulp-webapp)

## Running the app

- On initial git clone:

`npm update`, `bower update`

- Run `gulp serve` to preview and watch for changes

- Run `gulp` to build your webapp for production

**Note:**

I've added all the Node dependencies using the `npm install --save-dev` syntax, so all they should all load after the `serve` task is run.

## State of the test

I've created a Yeoman Angular Web App.

- At present the landing page is a grey bootstrap view only :-(

- The Angular.js code is functioning and the basic requirements are complete.

- I'll revisit the app as time permits to make it beautiful.

### TODO
* [x] resolve NPM dependencies
* [x] add bootstrap ui designs
* [ ] redesign

## Design

I've used PhotoShop to create a quick mock up:

![Screenshot](/design/mock-up-2.jpg?raw=true "Mockup-2")

