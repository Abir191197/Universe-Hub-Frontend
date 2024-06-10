import Lottie from "lottie-react";
import LoginAnimation from "./../../../assets/Landing Page/login.json";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="flex min-h-screen">
        {/* Animation Section - Hidden on Small Screens */}
        <div className="hidden lg:block flex-1">
          <Lottie
            className="h-96 mt-36"
            animationData={LoginAnimation}
            loop={true}
          />
        </div>
        {/* Form Section */}
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-8 text-2xl font-bold leading-9 text-gray-900">
                Sign in to your account
              </h2>
            </div>
            {/* Login Form */}
            <div className="mt-2">
              <form action="#" method="POST" className="space-y-6">
                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Password Input */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Remember Me Checkbox and Forgot Password Link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-3 block text-sm leading-6 text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm leading-6">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                {/* Sign In Button */}
                <Link to="/Dashboard">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </Link>
              </form>
            </div>
            {/* Sign Up Link */}
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Not a member?{" "}
              <Link
                to="/SignUp"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Sign Up
              </Link>
            </p>
            {/* Social Login Buttons */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <a
                href="#"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#eaeaea] px-3 py-1.5 text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
              >
                <svg
                  viewBox="0 0 262.00 262.00"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  {/* Google Logo SVG Path */}
                </svg>
                <span className="text-sm font-semibold leading-6">Google</span>
              </a>
              <a
                href="#"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {/* GitHub Logo SVG Path */}
                </svg>
                <span className="text-sm font-semibold leading-6">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
