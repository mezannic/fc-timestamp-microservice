# Timestamp Microservice

Converts a date or unix timestamp to a JSON object containing both.

## Set up

~~~bash
npm install
node server.js
~~~

The server will listen to the port specified in the PORT environment variable.

## Example usage

URL : http://localhost:8080/January%2024,%201984

~~~json
{"unix":443750400,"natural":"January 24, 1984"}
~~~
