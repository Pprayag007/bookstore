import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "./Navbar";
function Addbook() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      price: data.price,
      category: data.category,
    //   image: data.image,
      title: data.title,
    };
    await axios
      .post("http://localhost:4001/book/postbooks", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Book Added Successfully");
          navigate(from, { replace: true });
        }
        // localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <>
    <Navbar/>
      <div className="flex h-screen items-center justify-center">
        <div className=" w-[600px] ">
          <div className="modal-box" style={{minHeight:"531px", display: "flex",justifyContent:"center",alignItems:"center",marginTop:"100px"}}>
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <h3 className="font-bold text-lg">Add new Book</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter name of the book"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Price</span>
                <br />
                <input
                  type=""
                  placeholder="Enter the price"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("price", { required: true })}
                />
                <br />
                {errors.price && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* category */}
              <div className="mt-4 space-y-2">
                <span>Category</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your category"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("category", { required: true })}
                />
                <br />
                {errors.category && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* {Title} */}
              <div className="mt-4 space-y-2">
                <span>Title</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your title"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("title", { required: true })}
                />
                <br />
                {errors.title && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Add Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addbook;
