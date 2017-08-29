## Gulp Susy Starter

## Project Setup

1. Install Node.js

2. Install gulp (run anywhere)

    ~~~
    npm install -g gulp
    ~~~

3. Install bower (run anywhere)

    ~~~
    npm install -g bower
    ~~~

4. Install Node dependencies (run in project root folder)

    ~~~
    npm install
    ~~~

5. Install Bower dependencies (run in project root folder)

    ~~~
    bower install
    ~~~

## Usage 

The gruntfile in this project is setup to run `gulp-sass` for scss files and `gulp-file-include` for html (and html includes) and to watch for changes in `scss/*.scss` and `templates/*.html`. Use the `gulp` command (run in project root folder) to start the process.

    ~~~
    gulp
    ~~~

That's it!
Html files will be generated in project root. And main.css in CSS folder.