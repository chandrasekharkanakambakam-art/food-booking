import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill all fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Enter a valid email address");
      return;
    }

    setError("");

    // Demo login only
    localStorage.setItem(
      "foodieUser",
      JSON.stringify({ email: formData.email })
    );

    alert("Login Successful!");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-5">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* Left Image Section */}

        <div className="hidden md:block relative min-h-[600px]">

          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=900"
            alt="Food"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-10 text-white">

            <h1 className="text-4xl font-bold">
              Welcome to FoodieHub
            </h1>

            <p className="mt-4 text-lg">
              Delicious food delivered fresh
              to your doorstep.
            </p>

          </div>
        </div>

        {/* Login Form */}

        <div className="p-8 md:p-12 flex flex-col justify-center">

          <Link
            to="/"
            className="text-3xl font-bold text-orange-500"
          >
            FoodieHub
          </Link>

          <h2 className="text-3xl font-bold mt-8">
            Login
          </h2>

          <p className="text-gray-500 mt-2">
            Welcome back! Please login to your account.
          </p>

          <form
            onSubmit={handleLogin}
            className="mt-8 space-y-5"
          >

            {/* Email */}

            <div>
              <label className="block font-semibold mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Password */}

            <div>
              <label className="block font-semibold mb-2">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 p-3 pr-16 rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-orange-500 font-semibold"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>
            </div>

            {/* Remember and Forgot */}

            <div className="flex justify-between items-center text-sm">

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                onClick={() => alert("Please contact support for password reset.")}
                className="text-orange-500 font-semibold"
              >
                Forgot Password?
              </button>

            </div>

            <div className="mb-6">
  <Logo size="small" />
</div>

            {/* Error */}

            {error && (
              <p className="text-red-500 text-sm">
                {error}
              </p>
            )}

            {/* Login Button */}

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition"
            >
              Login
            </button>

          </form>

          <p className="text-center text-gray-500 mt-8">
            Don't have an account?{" "}
            <Link
              to="/"
              className="text-orange-500 font-bold"
            >
              Create Account
            </Link>
          </p>

          <Link
            to="/"
            className="text-center text-gray-500 mt-6 hover:text-orange-500"
          >
            ← Back to Home
          </Link>
          <div className="mb-6">
  <Logo />
</div>

        </div>
      </div>
    </div>
  );
}
