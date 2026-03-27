import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-[350px]">

                <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
                    Login
                </h2>

                <form className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    />

                    <button className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition">
                        Login
                    </button>
                </form>

                <p className="text-center mt-4 text-sm">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-green-600 font-semibold hover:underline">
                        Register
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default Login;