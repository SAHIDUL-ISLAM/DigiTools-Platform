const NavBar = () => {
  return (
    <div className="navbar max-w-5xl m-auto">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold py-5">
          <h1 className="bg-gradient-to-br from-[#4F39F6] to-[#fa14df] bg-clip-text text-3xl font-bold text-transparent">DigiTools</h1>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <img src="" alt="cart" />
        <a href="#">Login</a>
        <a className="btn bg-gradient-to-br from-[#4F39F6] to-[#fa14df] rounded-full text-white">Get in Touch</a>
      </div>
      <hr />
    </div>
  );
};

export default NavBar;