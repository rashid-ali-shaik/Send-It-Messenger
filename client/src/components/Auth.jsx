import { useState } from "react";
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const AuthPages = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };
    switch (name) {
      case "email": {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        newErrors.email = emailRegex.test(value) ? "" : "Invalid email format";
        break;
      }
      case "password":
        newErrors.password =
          value.length >= 6
            ? ""
            : "Password must be at least 6 characters long";
        break;
      case "confirmPassword":
        newErrors.confirmPassword =
          value === formData.password ? "" : "Passwords do not match";
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profileImage: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      profileImage: null,
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="focus:ring-indigo-500 p-3 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="focus:ring-indigo-500 p-3  focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby="email-error"
              />
            </div>
            {errors.email && (
              <p className="mt-2 text-sm text-red-600" id="email-error">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="focus:ring-indigo-500 p-3 focus:border-indigo-500 block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="********"
                value={formData.password}
                onChange={handleInputChange}
                required
                minLength={6}
                aria-invalid={errors.password ? "true" : "false"}
                aria-describedby="password-error"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            {errors.password && (
              <p className="mt-2 text-sm text-red-600" id="password-error">
                {errors.password}
              </p>
            )}
          </div>
          {!isLogin && (
            <>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="focus:ring-indigo-500 p-3 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="********"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    minLength={6}
                    aria-invalid={errors.confirmPassword ? "true" : "false"}
                    aria-describedby="confirm-password-error"
                  />
                </div>
                {errors.confirmPassword && (
                  <p
                    className="mt-2 text-sm text-red-600"
                    id="confirm-password-error"
                  >
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="profileImage"
                  className="block text-sm font-medium text-gray-700"
                >
                  Profile Image
                </label>
                <div className="mt-1 flex items-center space-x-4">
                  <input
                    type="file"
                    name="profileImage"
                    id="profileImage"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="sr-only"
                  />
                  <label
                    htmlFor="profileImage"
                    className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Upload Image
                  </label>
                  {formData.profileImage && (
                    <img
                      src={formData.profileImage}
                      alt="Profile Preview"
                      className="h-16 w-16 rounded-full object-cover"
                    />
                  )}
                </div>
              </div>
            </>
          )}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          {isLogin ? (
            <p className="text-sm text-indigo-600 ">
              Need an account?{" "}
              <span
                className="hover:underline hover:text-indigo-500 cursor-pointer"
                onClick={toggleAuthMode}
              >
                Register
              </span>
            </p>
          ) : (
            <p className="text-sm text-indigo-600 ">
              Already have an account?{" "}
              <span
                className="hover:underline hover:text-indigo-500 cursor-pointer"
                onClick={toggleAuthMode}
              >
                Login
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPages;
