

import { useForm } from "react-hook-form";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";

export const Contact = () => {

  // const [open, setOpen] = useState(false);

  // let btnRef = useRef();

  // const onBtnClick = (e) => {
  //   if (btnRef.current) {
  //     btnRef.current.setAttribute("disabled", "disabled");
  //   } else {
  //     btnRef.removeAttribute("disabled");
  //   }
  // };

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmitForm = (values, e) => {
    e.persist();
    e.preventDefault();
    console.log(values);
    axios({
      method: "POST",
      url: "https://formspree.io/f/xbjwapkv",
      data: values,
    });

    e.target.reset();
    // setOpen(true);
    // onBtnClick();
    router.push('/')
  };

  // async function onSubmitForm(values) {
  //   console.log(values);
  //   let config = {
  //     method: "post",
  //     url:"https://formspree.io/f/xvolbvrl",
  //     headers: {
  //       Accept: "application/json, text/plain, */*",
  //       "Content-Type": "application/json",
  //     },

  //     data: values,
      
  //   };

  //   try {
  //     const response = await axios(config);
  //     if (response.data.status == 200 ) {
  //       router.push('/');
  //       console.log('hi');
          
  //     }

  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

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
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Full name
              </label>
              <input
                type="text"
                name="name"
                className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 `}
                placeholder="Full name"
                {...register("name", {
                  pattern: /^[a-z ,.'-]+$/i,
                  required: true,
                })}
              />
              {errors.name && (
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
            </div>
            <div>
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
            </div>
            <div>
              <button
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

export default Contact;
