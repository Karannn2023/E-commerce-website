const Profile = () => {
  return (
    <div className="big_container">
      <div className="profile_container">
        <div className="profile_heading">
          <h3>Welcome to India's Largest</h3>
          <h3>Online Fashion Store</h3>
          <p>Please Login to your account</p>
        </div>
        <form className="login_form">
          <p>Email ID</p> <br />
          <input type="email" className="input_profile" />
          <br />
          <p>Password</p> <br />
          <input type="password" className="input_profile" />
          <br />
          <div className="checkbox">
            <input type="checkbox" className="check" />
            Keep me signed in
          </div>
          <button className="login_btn">Login</button>
          <button className="signin_btn">Sign up</button>
        </form>
      </div>
      <div className="profile_side_conatiner">
        <img src="profile login.webp" alt="" />
      </div>
    </div>
  );
};
export default Profile;
