import React from "react";
import Logo from "../../public/images/logo.png";
import Image from "next/image";

// const ContactUs:React.FC = () => {
//   return (
//     <div className="py-20">
//       <div className=" flex gap-5 w-10/12 mx-auto">
//         <div className="border border-[#ffffff1d] w-1/3 p-5 flex flex-col rounded-lg gap-5">
//           <div className="w-full flex-1 border border-[#ffffff1d] overflow-hidden rounded-lg flex items-center justify-center">
//             <Image src={Logo} alt="hevomax logo" width={150} />
//           </div>
//           <div className="p-5 text-white  border border-[#ffffff1d] rounded-lg">
//             <span className="text-xs font-medium uppercase text-orange-600">
//               Founder
//             </span>
//             <h1 className="text-2xl font-medium">Rishabh Chandore.</h1>
//           </div>
//         </div>
//         <div className="flex-1 rounded-lg border border-[#ffffff1d] p-5 ">
//           <div className=" pb-10 text-center text-orange-600  font-medium uppercase">
//             Contact us
//             <div className="text-center">
//               <span className="inline-block w-1 h-1 rounded-full bg-orange-600 ml-1"></span>
//               <span className="inline-block w-3 h-1 rounded-full bg-orange-600 ml-1"></span>
//               <span className="inline-block w-40 h-1 rounded-full bg-orange-600 ml-1"></span>
//               <span className="inline-block w-3 h-1 rounded-full bg-orange-600 ml-1"></span>
//               <span className="inline-block w-1 h-1 rounded-full bg-orange-600 ml-1"></span>
//             </div>
//           </div>
//           <div>
//             <form className="flex flex-col gap-5" name="contact"  >
//               <div className="flex gap-5 w-full">
//                 <div className="flex-1">
//                   <label htmlFor="first" className="text-xs text-white">
//                     First Name
//                   </label>{" "}
//                   <br />
//                   <input
//                     type="text"
//                     placeholder="Enter First ame"
//                     name="first name"
//                     className="text-white mt-1 text-xs p-2 border border-[#ffffff1d] outline-none w-full rounded-lg bg-transparent"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <label htmlFor="last" className="text-xs text-white">
//                     Last Name
//                   </label>{" "}
//                   <br />
//                   <input
//                     type="text"
//                     placeholder="Enter Last Name"
//                     name="last name"
//                     className="text-white mt-1 text-xs p-2 border border-[#ffffff1d] outline-none w-full rounded-lg bg-transparent"
//                   />
//                 </div>
//               </div>
//               <div className="flex gap-5 w-full">
//                 <div className="flex-1">
//                   <label htmlFor="email" className="text-xs text-white">
//                     Email
//                   </label>{" "}
//                   <br />
//                   <input
//                     type="email"
//                     placeholder="Enter email"
//                     name="email"
//                     className="text-white mt-1 text-xs p-2 border border-[#ffffff1d] outline-none w-full rounded-lg bg-transparent"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <label htmlFor="phone" className="text-xs text-white">
//                     Phone
//                   </label>{" "}
//                   <br />
//                   <input
//                     type="tel"
//                     placeholder="Enter Phone Number"
//                     name="mobile"
//                     className="text-white mt-1 text-xs p-2 border border-[#ffffff1d] outline-none w-full rounded-lg bg-transparent"
//                   />
//                 </div>
//               </div>
//               <div className="flex-1">
//                 <label htmlFor="message" className="text-xs text-white">
//                   Message
//                 </label>{" "}
//                 <br />
//                 <textarea
//                   name="messge"
//                   placeholder="Enter Message"
//                   rows={5}

//                   className=" text-white mt-1 text-xs p-2 border border-[#ffffff1d] outline-none w-full rounded-lg bg-transparent"
//                 ></textarea>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-gray-50 text-xs items-center">
//                   <input
//                     type="checkbox"
//                     className="mt-1 text-xs p-2 border accent-orange-600 border-[#ffffff1d] outline-none rounded-lg bg-transparent"
//                   />{" "}
//                   <span>
//                     {" "}
//                     &nbsp;I agree with The Terms of Use and Privacy Policy
//                   </span>
//                 </span>
//                 <button  type="submit" className="bg-orange-600 text-white p-2 px-5 rounded-lg outline-none text-xs  font-medium">
//                   Let&apos;s Connect
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// ... (previous imports and component definition)

const ContactUs: React.FC = () => {
  return (
    <div className="py-20">
      <div className="flex gap-5 w-10/12 mx-auto">
        <div className="border border-[#ffffff1d] w-1/3 p-5 flex flex-col rounded-lg gap-5">
          <div className="w-full flex-1 border border-[#ffffff1d] overflow-hidden rounded-lg flex items-center justify-center">
            <Image src={Logo} alt="hevomax logo" width={150} />
          </div>
          <div className="p-5 text-white border border-[#ffffff1d] rounded-lg">
            <span className="text-xs font-medium uppercase text-orange-600">
              Founder
            </span>
            <h1 className="text-2xl font-medium">Rishabh Chandore.</h1>
          </div>
        </div>
        <div className="flex-1 rounded-lg border border-[#ffffff1d] p-5 ">
          <div className="pb-10 text-center text-orange-600 font-medium uppercase">
            Contact us
            <div className="text-center">
              <span className="inline-block w-1 h-1 rounded-full bg-orange-600 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-orange-600 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-orange-600 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-orange-600 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-orange-600 ml-1"></span>
            </div>
          </div>
          <div>
            <form className="flex flex-col gap-5" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
              <div className="flex gap-5 w-full">
                <div className="flex-1">
                  <label htmlFor="first" className="text-xs text-white">
                    First Name
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    name="first name"
                    className="text-white mt-1 text-xs p-2 border border-[#ffffff1d] outline-none w-full rounded-lg bg-transparent"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="last" className="text-xs text-white">
                    Last Name
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="last name"
                    className="text-white mt-1 text-xs p-2 border border-[#ffffff1d] outline-none w-full rounded-lg bg-transparent"
                  />
                </div>
              </div>
              <div className="flex gap-5 w-full">
                <div className="flex-1">
                  <label htmlFor="email" className="text-xs text-white">
                    Email
                  </label>{" "}
                  <br />
                  <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    className="text-white mt-1 text-xs p-2 border border-[#ffffff1d] outline-none w-full rounded-lg bg-transparent"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="phone" className="text-xs text-white">
                    Phone
                  </label>{" "}
                  <br />
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    name="mobile"
                    className="text-white mt-1 text-xs p-2 border border-[#ffffff1d] outline-none w-full rounded-lg bg-transparent"
                  />
                </div>
              </div>
              <div className="flex-1">
                <label htmlFor="message" className="text-xs text-white">
                  Message
                </label>{" "}
                <br />
                <textarea
                  name="message"
                  placeholder="Enter Message"
                  rows={5}
                  className="text-white mt-1 text-xs p-2 border border-[#ffffff1d] outline-none w-full rounded-lg bg-transparent"
                ></textarea>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-50 text-xs items-center">
                  <input
                    type="checkbox"
                    className="mt-1 text-xs p-2 border accent-orange-600 border-[#ffffff1d] outline-none rounded-lg bg-transparent"
                  />{" "}
                  <span>
                    {" "}
                    &nbsp;I agree with The Terms of Use and Privacy Policy
                  </span>
                </span>
                <button type="submit" className="bg-orange-600 text-white p-2 px-5 rounded-lg outline-none text-xs font-medium">
                  Let&apos;s Connect
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
