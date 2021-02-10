# What's the problem

<p>
The application today has a lot of requests into the services files, this requests is functional but is not practical, because always when create a new service function exist a lot of code repeat, this is not usual and cause problem, because always the function service is called, the store service is also called to get the user token, we dont have a controll of endpoints,
simplify if necessary the refresh token and create a especific errors handler to differents statusc code.
</p>

# Suggestion

<p>
I gotcha the axios functionality interceptors and create one axios instance to get the request and response, why? today we have a code repeat in all service file.

- the request: `` axios.get(`${api-hots-name}/route`, headers) ``

- the response: `return response.data`

This is at the all files services.

With the interceptor we have a one instance to this with the unique base URL in the one place, to response and request.

You can see the instance example in [axios.ts](./axios.ts) file, the others archives the new requests is below.

This file is the request service implementing the soluction to also reduce code repeat :

- [request-service.ts](./request-service.ts)

This file have a controll of the endpoints:

- [endpoints.ts](./endpoints.ts)

This files show a exemple the use service https get and post:

- [get](./axios-get.ts)
- [post](./axios-post.ts)

</p>

# Run and test

Clone the repository and install dependencies with command: `yarn`, open one window terminal and run: `yarn start` to init server, and the another terminal you can run `yarn get` to test get request and `yarn post` to test post request.
