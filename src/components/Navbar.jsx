// import { Link } from "react-router-dom";
// import Logo from "./Logo";

// export default function Navbar({ cartCount }) {
//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-5 h-16 flex justify-between items-center">

//         <Logo />

//         <div className="flex items-center gap-5 text-sm font-medium">

//           <Link to="/" className="hover:text-orange-500">
//             Home
//           </Link>

//           <Link to="/menu" className="hover:text-orange-500">
//             Menu
//           </Link>

//           <Link to="/orders" className="hover:text-orange-500">
//             My Orders
//           </Link>

//           <Link
//             to="/login"
//             className="bg-orange-500 text-white px-4 py-2 rounded-lg"
//           >
//             Login
//           </Link>

//           <Link
//             to="/cart"
//             className="bg-gray-900 text-white px-4 py-2 rounded-lg"
//           >
//             🛒 Cart ({cartCount})
//           </Link>

//         </div>
//       </div>
//     </nav>
//   );
// }



import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navbar({ cartCount = 0 }) {
  const linkStyle = ({ isActive }) =>
    `font-medium transition ${
      isActive
        ? "text-orange-600 border-b-2 border-orange-600"
        : "text-gray-700 hover:text-orange-500"
    }`;

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>

        <div className="flex items-center gap-6">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/menu" className={linkStyle}>
            Menu
          </NavLink>

          <NavLink to="/cart" className={linkStyle}>
            Cart ({cartCount})
          </NavLink>

          <NavLink to="/orders" className={linkStyle}>
            My Orders
          </NavLink>

          <NavLink
            to="/login"
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
