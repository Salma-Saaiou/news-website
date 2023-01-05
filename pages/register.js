import { useForm } from "react-hook-form";
import axios, { Axios } from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMutate } from "restful-react";
import { useState } from "react";
import { use } from "bcrypt/promises";

export const Register = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (values, e) => {
    e.persist();
    e.preventDefault();
    console.log(values.username);
    axios
      .post("http://localhost:3000/register", {
        username: values.username,
        email: values.email,
        password: values.password
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <Head>
        <title>Contact - newsApp</title>
        <meta name="description" content="Contact - NewsApp" key="Contact" />
        <meta property="og:title" content="Contact - NewsApp" key="Contact" />
      </Head>
      {/* <Toolbar /> */}

      <main className="b py-16 bg-gray-50 px-4 sm:px-6 h-screen w-screen flex justify-center items-center">
        <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
          <form
            className="grid grid-cols-1 gap-y-6"
            method="POST"
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <div>
              <label htmlFor="username" className="sr-only">
                Full name
              </label>
              <input
                type="text"
                name="username"
                className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 `}
                placeholder="Full name"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                {...register("username", {
                  pattern: /^[a-z ,.'-]+$/i,
                  required: true,
                  
                })}
              />
              {errors.username && (
                <span className="text-red-400 text-sm py-2">
                  this field is required
                </span>
              )}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                name="email"
                type="text"
                className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2`}
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                {...register("email", {
                  pattern:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  required: true,
                
                })}
              />
              {errors.email && (
                <span className="text-[#FF0000] text-sm py-2">
                  this field is required
                </span>
              )}
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                password
              </label>
              <input
                name="password"
                type="text"
                className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2`}
                placeholder="Email"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                {...register("password", {
                
            
                })}
              />
              {/* {errors.password && (
                <span className="text-[#FF0000] text-sm py-2">
                  this field is required
                </span>
              )} */}
            </div>
            {/* <div>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                type="phone number"
                name="phone"
                className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
                placeholder="Phone"
                {...register("phone", {
                  required: "Required",
                  pattern: /(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}/,
                })}
              />
              {errors.phone && (
                <span className="text-red-400 text-sm py-2">
                  this field is required
                </span>
              )}
            </div> */}
            {/* <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2`}
                placeholder="Message"
                {...register("message", {
                  required: "Required",
                })}
              ></textarea>
              {errors.message && (
                <span className="text-red-400 text-sm py-2">
                  this field is required
                </span>
              )}
            </div> */}
            <div>
              <button
                //   onClick={registerUser}
                type="submit"
                className="inline-flex justify-center py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Register;
