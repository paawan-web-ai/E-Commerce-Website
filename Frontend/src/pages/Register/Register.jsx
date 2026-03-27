import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-[350px]">

                <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
                    Create Account
                </h2>

                <form className="flex flex-col gap-4">

                    <input
                        type="text"
                        placeholder="Full Name"
                        className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    />

                    <button className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition font-semibold">
                        Register
                    </button>

                </form>

                <p className="text-center mt-4 text-sm">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-green-600 font-semibold hover:underline"
                    >
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default Register;