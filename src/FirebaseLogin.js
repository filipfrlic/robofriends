  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyDZfx6pKLtu7F7HZFJ44dHFf8oH8-83W4w",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://tester-74202.firebaseio.com/",
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();