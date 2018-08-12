# angular-material-datepicker
Small demo app using angular 6 to create datepicker in MM/YY format



# Angular Material Datepicker App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Setup and run instructions

Pull this repo go inside the project root and run npm install

Install below packages globally using the below commands

npm install -g @angular/cli


cd angular-material-datepicker and then run npm install


Run npm run start or ng serve. This will start client angularapp on port 4200.




## Assumptions of this application:

* If the json response attribute 'deviationFromTimetable' < 0, the corresponding bus is late
* If the json response attribute 'deviationFromTimetable' > 0, the corresponding bus is early
* If the json response attribute 'deviationFromTimetable' = 0, the corresponding bus is on time
* If the json response attribute 'deviationFromTimetable' = null, the corresponding bus timing is shown as UNKNOWN in the table


## Note
* The above commands/tasks can be automated and a single command can be used via Grunt or Gulp.
* Test cases are pending.