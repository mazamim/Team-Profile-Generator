const path = require("path");

function createHtml(members) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team-Profile</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    

    <header>
        <div class="collapse bg-dark" id="navbarHeader">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-md-7 py-4">
                <h4 class="text-white">About</h4>
                <p class="text-muted"> a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so i have written unit test for every part of my code and ensure that it passes each test.</p>
              </div>
              <div class="col-sm-4 offset-md-1 py-4">
                <h4 class="text-white">Contact</h4>
                <ul class="list-unstyled">
                  <li><a href="https://github.com/mazamim" class="text-white">Follow on Github</a></li>
                  <li><a href="https://www.facebook.com/mazamim91/" class="text-white">Like on Facebook</a></li>
                  <li><a href="https://dreamy-hypatia-612052.netlify.app/" class="text-white">Email me</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar navbar-dark bg-dark box-shadow">
          <div class="container d-flex justify-content-between">
            <a href="#" class="navbar-brand d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
              <strong>Team-Profile</strong>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>


      <main role="main">

        <section class="jumbotron text-center">
          <div class="container">
            <h1 class="jumbotron-heading">Team-Profile</h1>
            <p class="lead text-muted">a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.</p>
        
          </div>
        </section>
  
    
      
            <div class="container">
                <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
         
            ${members
              .map((element) => {
                const name = Object.keys(element)[0];
                const id = Object.keys(element)[1];
                const email = Object.keys(element)[2];
                const office_num = Object.keys(element)[3];

                const removelastbit_ = name.slice(0, name.length - 5);
                after_ = removelastbit_.replace(/_/g, " ");
                return `
              <div class="col">
              <div class="card radius-15">
                  <div class="card-body text-center">
                      <div class="p-4 border radius-15">
                          <img src=https://bootdey.com/img/Content/avatar/avatar3.png width="110" height="110" class="rounded-circle shadow" alt="">
                          <h5 class="mb-0 mt-5">${element[name]}</h5>
                          <p class="mb-3">${after_}</p>
                          <ul class="list-group">
                            <li class="list-group-item">${element[id]}</li>
                          
                            <li class="list-group-item list-group-item-primary">${element[email]}</li>
                            <li class="list-group-item list-group-item-secondary">${element[office_num]}</li>
                 
                          </ul>
                          </div>
                       
                      </div>
                   


                  </div>
              </div>

              `;
              })
              .join("")}
                
             
                </div>
                </div>

  
      </main>



    <footer class="text-muted">
        <div class="container">
          <p class="float-right">
            <a href="#">Back to top</a>
          </p>
    
        </div>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous"></script>
</body>
</html>`;
}

module.exports = createHtml;
