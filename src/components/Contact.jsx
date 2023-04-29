import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";

const serviceId = import.meta.env.VITE_SERVICE_ID || "default_value";
const templateId = import.meta.env.VITE_TEMPLATE_ID || "default_value";
const publicKey = import.meta.env.VITE_PUBLIC_KEY || "default_value";

const Contact = () => {
  const [hasEmailSent, setHasEmailSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        setIsLoading(true);
        setHasEmailSent(true);
        setIsLoading(false);
        setTimeout(() => setHasEmailSent(false), 3000);
        form.current.reset();
        console.log(result.text);
        console.log("Email sent");
      },
      (error) => {
        setIsError(true);
        setTimeout(() => setIsError(false), 3000);
        formRef.current.reset();
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact" className="py-10 bg-custom-black sm:py-16 lg:py-24">
      <div className=" container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-center pt-0 md:mb-20">
            <h2 className="mt-4 text-4xl md:text-5xl font-extralight text-white md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-custom-red"></span>
                <span className="relative font-semibold">Get in touch!</span>
              </span>
              <br className="block sm:hidden" />
            </h2>
          </div>
        </div>

        <div className="mx-auto overflow-hidden bg-custom-black rounded-xl max-w-3xl">
          <div className="px-6">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-14 bg-custom-black"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-8">
                <div>
                  <label
                    htmlFor="from_name"
                    className="text-base font-light text-white"
                  >
                    {" "}
                    Your name{" "}
                  </label>
                  <div className="mt-2.5 relative">
                    <input
                      type="text"
                      name="from_name"
                      id="from_name"
                      placeholder="Enter your name"
                      className="block w-full px-4 py-4 text-white placeholder-gray-500 transition-all duration-200 bg-black border-b border-b-custom-red rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="user-email"
                    className="text-base font-light text-white"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2.5 relative">
                    <input
                      type="email"
                      name="user-email"
                      id="user-email"
                      placeholder="Enter your email address"
                      className="block w-full px-4 py-4 text-white placeholder-gray-500 transition-all duration-200 bg-black border-b border-b-custom-red rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label for="" className="text-base font-light text-white">
                    {" "}
                    Message{" "}
                  </label>
                  <div className="mt-2.5 relative">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Write your message"
                      className="block w-full font-light px-4 py-4 mt-[40px] text-white placeholder-gray-500 transition-all duration-200 bg-black border-b border-b-custom-red rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                      rows="4"
                      maxLength={500}
                    ></textarea>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    value="Send"
                    className=" cursor-pointer absolute inline-flex items-center justify-center px-10 py-3 mt-8 font-light leading-5 text-white transition-all duration-200 bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black hover:text-white  hover:opacity-70 text-md"
                  >
                    Send
                    <svg
                      className="w-6 h-6 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Notification */}
      {hasEmailSent ? (
        <div className="h-24 bg-custom-black">
          <div className="flex items-end justify-end w-full h-full px-4 py-5 sm:p-6">
            <div className="bg-black w-full max-w-sm overflow-hidden border border-white rounded-lg shadow-lg">
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="ml-3 text-sm font-medium text-white">
                    Email sent successfully!
                  </p>

                  <div className="flex pl-8 ml-auto">
                    <button className="inline-flex text-white transition-all bg-black rounded-md hover:text-indigo-600 focus:outline-none focus:ring-2 durarion-200 focus:text-indigo-600 focus:ring-offset-2 focus:ring-indigo-600 focus:ring-offset-indigo-100">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {isError ? (
        <div className="h-24 bg-custom-black">
          <div className="flex items-end justify-end w-full h-full px-4 py-5 sm:p-6">
            <div className="bg-custom-red w-full max-w-sm overflow-hidden border border-white rounded-lg shadow-lg">
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  <p className="ml-3 text-sm font-medium text-white">
                    Error! Please try again.
                  </p>

                  <div className="flex pl-8 ml-auto">
                    <button className="inline-flex text-white transition-all bg-black rounded-md hover:text-indigo-600 focus:outline-none focus:ring-2 durarion-200 focus:text-indigo-600 focus:ring-offset-2 focus:ring-indigo-600 focus:ring-offset-indigo-100">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Contact;
