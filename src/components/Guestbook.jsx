import { useState } from "react";
import { BiDownArrowAlt } from "react-icons/bi";
import GuestbookABI from "../assets/abi/Guestbook.json";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useContractRead, useContractWrite } from "wagmi";

// Contract Address - deployed on polygon mainnet from 'web3' wallet
const guestbookContractAddress = "0x00F8e2B75e754107D02D03bf0bbdfD9934e35631";

const Guestbook = () => {
  const { data: account, isConnected } = useAccount();

  const [messageValue, setMessageValue] = useState("");

  const { data: messages, isLoading: areMessagesLoading } = useContractRead({
    address: guestbookContractAddress,
    abi: GuestbookABI.abi,
    functionName: "getAllMessages",
  });

  const { write: addMessage, isLoading: isLoadingWrite } = useContractWrite({
    address: guestbookContractAddress,
    abi: GuestbookABI.abi,
    functionName: "setMessage",
    args: [messageValue],
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      event.target.messageInput.value.toLowerCase().includes("fuck") ||
      event.target.messageInput.value.toLowerCase().includes("f*ck") ||
      event.target.messageInput.value.toLowerCase().includes("sex") ||
      event.target.messageInput.value.toLowerCase().includes("s*x") ||
      event.target.messageInput.value.toLowerCase().includes("suck") ||
      event.target.messageInput.value.toLowerCase().includes("pussy") ||
      event.target.messageInput.value.toLowerCase().includes("dick")
    ) {
      alert("Unable to post");
    } else {
      addMessage();
    }
  };

  return (
    <section id="guestbook" className="py-20">
      <div className="container mx-auto bg-black max-w-2xl p-12 pt-24 md:border-2 border-gray-200 shadow-2xl">
        <div className="text-center pt-0">
          <h2 className="mt-4 text-4xl md:text-5xl font-extralight text-white md:mt-8">
            <span className="relative inline-block">
              <span className="absolute inline-block w-full bottom-0.5 h-2 bg-custom-red"></span>
              <span className="relative font-semibold">Guestbook!</span>
            </span>
            <br className="block sm:hidden" />
          </h2>
        </div>
        <div>
          <p className="mt-12 mb-8 text-sm md:text-md font-light leading-5 text-white text-opacity-70 max-w-sm mx-auto text-center px-5">
            Do you have a Metamask wallet? I'd love it if you signed my
            guestbook!
            <br />
            <br />
            Please note that this guestbook has been created on the Polygon
            Network (blockchain), so you will pay a tiny gas fee in MATIC when
            signing. Thanks!
          </p>
          <div className="flex justify-center text-center mb-10 mt-0">
            {account ? (
              <button>
                <p>{account.address}</p>
              </button>
            ) : (
              <>
                <div>
                  <ConnectButton />
                </div>
              </>
            )}
          </div>

          <form onSubmit={handleSubmit} className=" bg-black max-w-sm mx-auto">
            <div className="grid place-items-center">
              <div className="relative w-[60%]">
                <input
                  type="text"
                  name="messageInput"
                  id="messageInput"
                  placeholder="Write 'Hello'!"
                  className="block mx-auto w-full px-4 py-4 mt-0 text-white placeholder-gray-500 transition-all duration-200 bg-black border-b border-b-custom-red rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                  maxLength={16}
                  onChange={(event) => setMessageValue(event.target.value)}
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer inline-flex items-center justify-center px-6 py-3 mt-12 text-sm font-light leading-5 text-white transition-all duration-200 bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black hover:bg-black hover:text-white"
              >
                Sign Guestbook
                <div
                  className={`w-3 h-6 ml-2 mt-1 ${
                    isLoadingWrite ? "animation-spin" : ""
                  }`}
                >
                  {" "}
                  <BiDownArrowAlt size={20} />
                </div>
              </button>
            </div>
          </form>

          <div className="container mx-auto md:max-w-[36rem] text-left custom-neumorphic-tech mt-16 overflow-scroll h-[20rem] bg-black p-5 md:p-10 mb-6">
            {/* Display all messages */}
            {!areMessagesLoading ? (
              messages
                ?.map((message, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-start mb-4 text-white text-sm font-extralight gap-2"
                  >
                    <p className="text-white text-opacity-70">
                      {`${message.visitor.substring(
                        0,
                        6
                      )}...${message.visitor.substring(
                        message.visitor.length - 6
                      )}`}
                    </p>
                    <p className="text-white">{message.message}</p>
                  </div>
                ))
                .reverse()
            ) : (
              <p className="text-white">There are no messages to show yet.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
