// importScripts('shared-logic.js');
// service-worker.js
self.addEventListener('install', event => {
    console.log('Service Worker installed');
    self.skipWaiting(); // Activate the service worker immediately
  });
  
  self.addEventListener('activate', event => {
    console.log('Service Worker activated');
    // setInterval(() => {
        cache = 1;
        // var i = $('h2').text();
        // $('h2').text(i++)
      console.log('This message appears after 2 seconds of activation');
    // }, 2000);
  });




  self.addEventListener('message', event => {
    console.log('Received message:', event.data);
  
      const url = 'https://dummyjson.com/products/1';
  
      // Send an HTTP request using fetch
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log('Data fetched:', data);
  
          // Send the fetched data back to the main script
          event.source.postMessage({ action: 'dataFetched', data });
        })
        .catch(error => {
          console.error('Error fetching data:', error);
  
          // Notify the main script of the error
          event.source.postMessage({ action: 'fetchError', error: error.message });
        });
  });