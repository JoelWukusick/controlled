# ControlLED
ControlLED is a user interface for controlling an LED light panel. It allows users to create gradients or custom designs on a 12x12 matrix, save their designs, and connect to a local LED panel. See a deployed version at http://ec2-3-133-103-243.us-east-2.compute.amazonaws.com:4000.

## Use

To create gradients, select a gradient pattern from the 'fade options' on the left. Select your gradient colors by clicking on each square underneath 'Fade Colors', selecting a color from the color picker, and clicking 'Apply color.' Once all the color squares under 'Fade Colors' are selected, you can click on 'Apply Fade' to apply the gradient to the matrix. The 'balanced' checkbox will apply an exponential curve to the gradient, which can look more natural to the eye with certian colors. You can also edit the matrix directly by clicking on the boxes you want to change, finding your color, and clicking apply color. Save a pattern by typing the design name and clicking save. Open previously saved patterns by clicking a pattern on the 'saved' bar on the right.
Signing in and adding a local IP address for your led panel will post the color data to the local IP as an array of color hex strings. For an example of hardware implementation see https://github.com/JoelWukusick/LED-panel.


## Local Installation

Install Nodejs  https://docs.npmjs.com/downloading-and-installing-node-js-and-npm and PostgreSQL https://www.postgresql.org/docs/12/tutorial-install.html this project uses NPM v6.13.4 and PostgreSQL 12.

Clone the repository, and create a config.js file in the database using your PostgreSQL user details.


Install NPM dependencies from the project folder.
```
$ npm install
```

Running the build script will bundle the javascript, setup the database, and start the server on port 4000.

```
$ npm build
```
