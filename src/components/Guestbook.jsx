import { useState, useEffect } from "react";
import { BiDownArrowAlt } from "react-icons/bi";
import { ethers } from "ethers";
import GuestbookABI from "/src/assets/abi/Guestbook.json";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  useAccount,
  useDisconnect,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";

// Contract Address - deployed on polygon mainnet from 'web3' wallet
const guestbookContractAddress = "0x00F8e2B75e754107D02D03bf0bbdfD9934e35631";

// abi
const abi = GuestbookABI.abi;

// Provider
// const providerUrl = `https://polygon-mainnet.g.alchemy.com/v2/${alchemyKey}`;
// const provider = new ethers.providers.JsonRpcProvider(providerUrl);
const provider = new ethers.providers.Web3Provider(window.ethereum);

// Contract Instance
const guestBookContract = new ethers.Contract(
  guestbookContractAddress,
  abi,
  provider
);

const Guestbook = () => {
  const { data: account } = useAccount();
  const { disconnect } = useDisconnect();

  const [message, setMessageValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [walletAddress, setWalletAddress] = useState("");

  const requestAccount = async () => {
    if (window.ethereum) {
      console.log("Metamask detected");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log("Error connecting...");
      }
    } else {
      console.log("Metamask not detected");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const {
    data: readData,
    isError,
    isLoading: isLoadingRead,
  } = useContractRead({
    address: guestbookContractAddress,
    abi: abi,
    functionName: "getAllMessages",
  });

  const { config } = usePrepareContractWrite({
    address: guestbookContractAddress,
    abi: abi,
    functionName: "setMessage",
  });
  const {
    data,
    isLoading: isLoadingWrite,
    isSuccess,
    write,
  } = useContractWrite(config);

  const fetchMessages = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        guestbookContractAddress,
        GuestbookABI.abi,
        signer
      );
      try {
        const data = await contract.getAllMessages();
        setMessages(data);
        console.log("data: ", data);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  };

  const setMessage = async (value) => {
    if (!value) return;
    if (!typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        guestbookContractAddress,
        GuestbookABI.abi,
        signer
      );
      const transaction = await contract.setMessage(value);
      await transaction.wait();
      fetchMessages();
    }
  };

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
      await setMessage(event.target.messageInput.value);
      setMessageValue(event.target.messageInput.value);
      event.target.messageInput.value = "";
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
            Network (blockchain), so you will pay a tiny gas fee in MATIC
            (perhaps US$0.01 or less) when signing. Thanks!
          </p>
          <div className="flex justify-center text-center mb-10 mt-0">
            {/* <button
              type="submit"
              onClick={connectWallet}
              className="cursor-pointer inline-flex font-light items-center justify-center px-6 py-3 mt-0 text-sm leading-5 text-white transition-all duration-200 bg-custom-red border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black hover:bg-black hover:text-white"
            >
              {walletAddress ? "Connected" : "Connect Wallet"}
            </button> */}

            {account ? (
              <button>
                <p>{account.address}</p>
              </button>
            ) : (
              <>
                <div>
                  <ConnectButton disabled={!write} onClick={() => write?.()} />
                </div>
                {/* <div>
                  {isLoadingWrite && <div>Check Wallet</div>}
                  {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
                </div> */}
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
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer inline-flex items-center justify-center px-6 py-3 mt-12 text-sm font-light leading-5 text-white transition-all duration-200 bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black hover:bg-black hover:text-white"
              >
                Sign Guestbook
                <div className="w-3 h-6 ml-2 mt-1">
                  {" "}
                  <BiDownArrowAlt size={20} />
                </div>
              </button>
            </div>
          </form>

          <div className="container mx-auto md:max-w-[36rem] text-left custom-neumorphic-tech mt-16 overflow-scroll h-[20rem] bg-black p-5 md:p-10 mb-6">
            {/* Display all messages */}
            {messages.length > 0 ? (
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
