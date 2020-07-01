const host1 = document.getElementsByTagName("shadow-host1")[0];const root1 = host1.attachShadow({mode: 'open'});
const bootcss = '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">';
const host2 = document.getElementsByTagName("shadow-hostnav")[0];const root2 = host2.attachShadow({mode: 'open'});
root2.innerHTML = bootcss + `<nav class="navbar navbar-expand-lg navbar-light bg-info ">
<a class="navbar-brand" href="#">SHADOWDOM</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarText"><span id="msg"></span>
<ul class="navbar-nav ml-auto"><li class="nav-item active"><a class="nav-link" href="#">Home </a></li><li class="nav-item active">
<a class="nav-link" href="#sdom1">Contact</a></li><li class="nav-item invisible"><a class="nav-link" href="#">About Us</a>
</li></ul></div></nav>`;root1.innerHTML = bootcss + `<div class="container my-5" id="sdom1" style="background-color:#e9ecef;">
<h1>Shadow Form</h1><form><div class="form-row"><div class="form-group col-md-6"><label for="inputEmail4">Email</label>
<input type="email" class="form-control" id="inputEmail4" placeholder="Email" required></div><div class="form-group col-md-6">
<label for="inputPassword4">Password</label><input type="password" class="form-control" id="inputPassword4" placeholder="Password" required>
</div></div><div class="form-group"><label for="inputAddress">Address</label><input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
</div><div class="form-group"><label for="inputAddress2">Address 2</label><input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
</div><div class="form-row"><div class="form-group col-md-6"><label for="inputCity">City</label><input type="text" class="form-control" id="inputCity">
</div><div class="form-group col-md-4"><label for="inputState">State</label><select id="inputState" class="form-control">
<option selected>Choose...</option><option>...</option></select></div><div class="form-group col-md-2"><label for="inputZip">Zip</label>
<input type="text" class="form-control" id="inputZip"></div></div><div class="form-group"><div class="form-check"><input class="form-check-input" type="checkbox" id="gridCheck" required>
<label class="form-check-label" for="gridCheck">Check me out</label></div></div><button type="submit" class="btn btn-primary my-3 mx-3">Sign in</button>
<button type="reset" class="btn btn-secondary">Reset</button><button type="button" class="btn btn-danger mx-3" disabled>Disabled</button>
</form></div>`;document.querySelector('shadow-hostnav').shadowRoot.querySelector('a.nav-link').addEventListener("click", () => {
document.querySelector('#msg-id').innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
SHADOW DOM ELEMENT IS CLICKED.<button type="button" class="close" data-dismiss="alert" aria-label="Close">
<span aria-hidden="true">&times;</span></button></div>`});document.querySelector('.belownav').addEventListener("click", () => {
   document.querySelector('#msg-id').innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
   I AM NOT A SHADOW DOM.<button type="button" class="close" data-dismiss="alert" aria-label="Close">
   <span aria-hidden="true">&times;</span></button></div>`});document.querySelector('shadow-host1').shadowRoot.querySelectorAll('button').forEach((e) => {
    e.addEventListener("click", () => document.querySelector('#msg-id').innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    SHADOW DOM ELEMENT IS CLICKED.<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></div>`)});document.querySelector('shadow-host1').shadowRoot.querySelectorAll('input').forEach((e) => {
    e.addEventListener("click", () => document.querySelector('#msg-id').innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    SHADOW DOM ELEMENT IS CLICKED.<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  </div>`)
});