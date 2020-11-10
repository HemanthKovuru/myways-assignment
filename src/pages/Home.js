import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./../scss/Home.scss";
import Success from "./../images/Icon awesome-check-circle.svg";
import BackButton from "./../images/Icon material-arrow_back.svg";

const Home = () => {
  const [signup, setsignup] = useState(false);
  const [login, setlogin] = useState(false);
  const [step, setStep] = useState("three");

  // signup popup box
  const handleSignupPopup = () => {
    setsignup(!signup);
    setStep("one");
    setlogin(false);
  };

  // signin pop up box
  const handleLoginPopup = () => {
    setlogin(!login);
  };

  // signin
  const handleSignin = (evt) => {
    evt.preventDefault();
    setStep("three");
    setsignup(!signup);
    setlogin(!login);
  };

  return (
    <div>
      {/* navbar */}
      <Navbar signupPopup={handleSignupPopup} signinPopup={handleLoginPopup} />
      {/* hero-text */}

      <div className='text-box'>
        <h1 className='heading__primary'>Apply and here back every time</h1>
        <p className='paragraph'>
          Exploring internships or jobs? Say good-bye to the typical job portals
          and use the power of Artificial Intelligence to become successful,
          faster.
        </p>
        <button onClick={handleSignupPopup} className='btn btn-green-big'>
          Get Started
        </button>
      </div>
      {/* end of hero-text */}

      {/* signup popup box */}
      {signup && (
        <div className='background-box'>
          {/* signup  */}
          <div className='signup-box'>
            {/* step1 */}
            {step === "two" && (
              <img
                onClick={() => setStep("one")}
                className='btn-back'
                src={BackButton}
                alt='back button'
              />
            )}
            <span onClick={handleSignupPopup} className='cross'>
              &#10005;
            </span>
            {step === "one" && (
              <div className='step1'>
                <h2 className='heading__secondary'>Sign Up</h2>
                <div className='heading__sub'>It's quick and easy</div>

                <form className='form__signup'>
                  <input
                    className='form__input'
                    type='text'
                    placeholder='First Name'
                  />
                  <input
                    className='form__input'
                    type='text'
                    placeholder='Last Name'
                  />
                  <input
                    className='form__input custom__input'
                    type='text'
                    placeholder='Email'
                  />
                  <input
                    className='form__input custom__input'
                    type='text'
                    placeholder='Password'
                  />
                  <button
                    onClick={() => setStep("two")}
                    className='btn btn-submit custom__input'
                    type='submit'>
                    Sign Up
                  </button>
                </form>
              </div>
            )}
            {/* end of step1

        {/* step2  */}
            {step === "two" && (
              <div className='step2'>
                <h3 className='heading__teritary'>
                  OTP <span>sent!</span>
                </h3>
                <input
                  className='input-otp'
                  type='number'
                  placeholder='Enter your OTP'
                />
                <div className='otp-para'>
                  One time Passcode sent to your email ID- abc@gmail.com
                </div>
                <div onClick={() => setStep("three")} className='btn btn-enter'>
                  Enter
                </div>
              </div>
            )}

            {/* end of step2 */}

            {/* step3  */}
            {step === "three" && (
              <div className='step3'>
                <img
                  className='success-logo'
                  src={Success}
                  alt='success logo'
                />
                <h3 className='heading-tertiary'>Thanks.Successfull!</h3>
              </div>
            )}
            {/* end of step 3 */}
          </div>
          {/* end of signup */}
        </div>
      )}
      {/* end of signup popup box */}

      {/* login */}
      {login && (
        <div className='background-box'>
          <div className='login-box'>
            <span onClick={handleLoginPopup} className='cross'>
              &#10005;
            </span>
            <h2 className='heading__tertiary medium-mg'>Login</h2>
            <form className='form__login'>
              <div className='form__heading'>Student</div>

              <input
                className='form__input small-mg'
                type='text'
                placeholder='Email'
              />
              <input
                className='form__input'
                type='text'
                placeholder='Password'
              />
              <div className='forgot'>Forgot Password?</div>

              <button
                onClick={handleSignin}
                className='btn btn-submit btn-login'
                type='submit'>
                Login
              </button>

              <h3
                onClick={handleSignupPopup}
                className='heading-teritary signup-link'>
                New to MyWays? Sign Up here
              </h3>
            </form>
          </div>
        </div>
      )}
      {/* end of login */}
    </div>
  );
};

export default Home;
