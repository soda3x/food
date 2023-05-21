# 🍔🍟 Food Decision Making Machine

What should we get for lunch in Mawson Lakes?

## Usage

Edit your `next.config.js` file as shown:

```js
const nextConfig = {
    env: {
        REACT_APP_FDMM_ROUTE: <server-api-route-goes-here>,
        REACT_APP_SERVERLESS: <true-or-false>,
        REACT_APP_CHOICES_URL: <url-here>,
        REACT_APP_CHOICES_WOOLIES_URL: <url-here>
    }
}
```

### Serverless mode

Set `REACT_APP_SERVERLESS: true` if you do not want to use the ExpressJS server component.
If this is true, `REACT_APP_FDMM_ROUTE` can be omitted from the file.

Set the `REACT_APP_CHOICES_URL` and `REACT_APP_CHOICES_WOOLIES_URL` variables to the file to fetch choices from.

### Server mode

See [this repo](https://github.com/soda3x/fdmm-server) for the server component.

The `REACT_APP_CHOICES_URL` and `REACT_APP_CHOICES_WOOLIES_URL` variables can be omitted from the file if using server mode.

The `REACT_APP_FDMM_ROUTE` variable should point to the route where the FDMM server is running.

### Running it

`npm i` then run `npm run start`

### _Thaleks_
