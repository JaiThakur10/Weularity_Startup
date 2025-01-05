import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import MobileNav from "./MobileNav"; // Assuming you have this
import MaxWidthWrapper from "./MaxWidthWrapper"; // Assuming you have this
import NavItems from "./NavItems"; // Assuming you have this
import { Button } from "./ui/button"; // Assuming a UI Button component exists

const Navbar = ({ isLoggedIn, user, onSignOut }) => {
  const [isAuth, setIsAuth] = useState(isLoggedIn || false); // Local auth state

  return (
    <div className="bg-black sticky z-50 top-0 inset-x-0 h-16 text-white">
      <header className="relative bg-[#140D0D] border-b border-gray-200">
        <MaxWidthWrapper>
          <div className="">
            <div className="flex h-16 items-center">
              {/* Mobile Nav */}
              <MobileNav />

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <img
                    src="images/weunavlogo.png"
                    alt="Logo"
                    className="h-[4rem] mt-0"
                  />
                </a>
              </div>

              {/* Navigation Items */}
              <div className="hidden z-50 lg:ml-8 lg:block">
                <NavItems />
              </div>

              {/* Right side of Navbar */}
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {isAuth ? (
                    <>
                      <span className="mr-4">
                        Welcome {user?.username || user?.email} !
                      </span>
                      <Button
                        className="bg-black"
                        onClick={() => {
                          setIsAuth(false);
                          onSignOut?.(); // Call signOut function if provided
                        }}
                      >
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <a href="/sign-in" className="text-white">
                      Sign In
                    </a>
                  )}

                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />

                  <a href="/pricing" className="text-white">
                    Pricing
                  </a>

                  {isAuth ? null : (
                    <div className="flex lg:ml-6">
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  {isAuth ? (
                    <a
                      href="/UserDashboard"
                      className="bg-[#60A5FA] text-white flex items-center px-4 py-2 rounded-md"
                    >
                      Let&apos;s Design <ArrowRight className="ml-1" />
                    </a>
                  ) : (
                    <a
                      href="/TakeInfo"
                      className="bg-[#60A5FA] text-white flex items-center px-4 py-2 rounded-md"
                    >
                      Get Started <ArrowRight className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
