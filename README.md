# BMI Calculator API

## Overview

The BMI Calculator API is a RESTful API that allows users to calculate their Body Mass Index (BMI), body fat percentage, ideal weight, and calories burned. The API provides endpoints for BMI calculation, body fat percentage estimation, ideal weight calculation, and calories burned estimation.

## Features

- Calculate BMI: Users can enter their weight and height, and the API will calculate their BMI value along with a BMI category (e.g., "Normal," "Overweight," "Obese").
- Estimate Body Fat Percentage: Users can provide their gender, height, waist, neck, and optional hip measurements to estimate their body fat percentage.
- Calculate Ideal Weight: Users can enter their gender and height, and the API will calculate their ideal weight based on a predefined formula.
- Estimate Calories Burned: Users can select an activity, duration, and weight to estimate the number of calories burned during that activity.

## Technologies Used

- Node.js with Express for the backend server.
- Vanilla JavaScript for frontend interactivity and API consumption.
- HTML and CSS for the frontend layout and design.

## Installation and Setup

https://github.com/LMcAlpine/fitness-health-calculator.git

1. Clone the repository to your local machine.
2. Install Node.js and npm if you haven't already.
3. Run `npm install` in the project root to install the required dependencies.
4. Run `cd server` and start the server using `node index.js`.
5. Assuming you are using VSCode install the "Live Server" extension by Ritwick Dey then open the index.html file and hit "Go Live" that appears on the bottom right after installing the extension. This will launch your web browser.

## API Endpoints

- `GET /bmi`: Calculate BMI based on weight and height inputs. Returns BMI value and category.
- `GET /bodyfat`: Estimate body fat percentage based on gender, height, waist, neck, and optional hip measurements.
- `GET /idealweight`: Calculate ideal weight based on gender and height inputs.
- `GET /caloriesburned`: Estimate calories burned during an activity based on activity type, duration, and weight inputs.

## Error Handling

- The API provides meaningful error messages for invalid inputs and failed requests.
- Invalid input errors include clear instructions on the expected format.

## Unit Validation

- The frontend includes input validation to ensure numeric and positive values for weight and height inputs.
- Users receive informative error messages when they enter invalid units.
