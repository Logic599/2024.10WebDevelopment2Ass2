const http = {
    //an object named http is defined to store the base URL for API requests.
    baseUrl: 'http://localhost:3000/api'
};
//defines a utility function requestGet for making HTTP GET requests using JavaScript's XMLHttpRequest (XHR) object
//A string representing the specific API and a object containing query parameters to be included in the request.
function requestGet(api, params) {
    //Promises allow asynchronous handling of HTTP requests. 
    //It represents the eventual completion(or failure) of the request and the data that will be received.
    return new Promise(resolve => {
        //A new XHR object is created. This object is used for making HTTP requests to the server
        const xhr = new XMLHttpRequest();
        //The XHR object is configured for a GET request. The specific URL is constructed by concatenating the base URL,
        //the provided api, and a query string generated using new URLSearchParams(params).toString().
        //In general, it is to synthesize a unique string from these data to obtain the corresponding data :)
        xhr.open('get', http.baseUrl + api + '?' + new URLSearchParams(params).toString(), true);
        //Launch command!
        xhr.send();
        //An event listener is attached to the XHR object for the readystatechange event. 
        //This event fires multiple times as the request progresses through different states
        xhr.onreadystatechange = function () {
            //Simply put, if the data acquisition is successful
            if (xhr.readyState === 4 && xhr.status == 200) {
                //The response text from the server is retrieved.
                const result = xhr.responseText;
                //The Promise is resolved with the parsed JSON data obtained from the response. 
                //By parsing the response using JSON.parse, the data is converted from a string to a JavaScript object or array.
                resolve(JSON.parse(result));
            }
        }
    });
}