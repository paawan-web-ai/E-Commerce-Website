import React from "react";
import axios from "axios";
const CreateAddToCart = () => {


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)

        axios.post("http://localhost:3000/api/posts", formData)
            .then((res) => {
                console.log(res)
            })
    }



    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white w-[400px] p-8 rounded-2xl shadow-lg">

                <h2 className="text-2xl font-bold text-center mb-6">
                    Create Product
                </h2>

                <form className="space-y-4" onSubmit={handleSubmit}>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Category
                        </label>

                        <select
                            name="category"
                            className="w-full border rounded-lg p-2"
                        >
                            <option value="featured">Featured Product</option>
                            <option value="new">New Arrival</option>
                            <option value="best">Best Seller</option>
                        </select>
                    </div>



                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            name="image"
                            className="w-full border rounded-lg p-2 cursor-pointer"
                        />

                    </div>

                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Product title"
                            className="w-full border rounded-lg p-2"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Price
                        </label>

                        <input
                            type="number"
                            name="price"
                            placeholder="Enter price"
                            className="w-full border rounded-lg p-2"
                        />

                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            rows="3"
                            placeholder="Write description..."
                            className="w-full border rounded-lg p-2"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Upload Product
                    </button>

                </form>

            </div >
        </div >
    );
};

export default CreateAddToCart;