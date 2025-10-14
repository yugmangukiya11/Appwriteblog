import React from "react";
import { Logo, LogoutBtn, Container } from "../index";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className="bg-white shadow py-3">
      <Container>
        <nav className="flex items-center justify-between">
          
          <div className="flex items-center gap-2">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          
          <ul className="flex items-center gap-6">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      className="text-gray-700 font-medium hover:text-blue-600 duration-200"
                      onClick={() => navigate(item.slug)}
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
          </ul>

          
          <div className="flex items-center gap-4">
            {authStatus ? (
              <>
                <span className="text-gray-700 font-medium flex items-center gap-1">
                  👤 {userData?.name || userData?.email || "User"}
                </span>
                <LogoutBtn />
              </>
            ) : (
              <>
                <button
                  className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 duration-200"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 duration-200"
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </button>
              </>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
