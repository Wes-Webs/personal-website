function Contact () {
  return (
    <div>
      <div class="bg-light py-4" id="contact">
      <div class="container">
        <div class="text-center text-success pb-4 display-5"><span class="shadow">Contact</span></div>
        <div class="text-center pb-4">Feel free to contact me with any questions you may have or if you'd like to schedule a meeting to discuss the creation of your site.</div>
        <div class="row">
          <div class="col-12 col-lg-4">
            <h4>Location:</h4>
            <p>555 North 555 West, Salt Lake City, UT 84111</p>
            <h4>Email:</h4>
            <p>wesleyowood@gmail.com</p>
            <h4>Call:</h4>
            <p>+1 435-862-5555</p>
            <h4>Social:</h4>
              <div class="social">
                <a href="#" class="fa fa-facebook mx-2 contactIcon fs-5"></a>
                <a href="#" class="fa fa-twitter mx-2 contactIcon fs-5"></a>
                <a href="#" class="fa fa-linkedin mx-2 contactIcon fs-5"></a>
                <a href="#" class="fa fa-github mx-2 contactIcon fs-5"></a>
              </div> 
          </div>
          <div class="col-12 col-lg-8">
            <form>
              <div class="row">
                <div class="col-12 col-lg-6">
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="fname" placeholder="name@example.com"/>
                    <label for="fname">First Name</label>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="lname" placeholder="Password"/>
                    <label for="lname">Last Name</label>
                  </div>
                </div>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="email" placeholder="name@example.com"/>
                <label for="email">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="company" placeholder="Password"/>
                <label for="company">Company (Optional)</label>
              </div>
              <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                <label for="floatingTextarea2">Comments</label>
              </div>
              <div class="text-center">
                <button type="button" class="btn btn-outline-success btn-lg">Success</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact