

function Navbar() {
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-light navigationBar">
        <div class="container-fluid">
          <a class="navbar-brand text-success fs-3 wes" href="#">WESLEY</a>
          <button class="navbar-toggler bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-white navigation" aria-current="page" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white navigation" href="#portfolio">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white navigation" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Navbar