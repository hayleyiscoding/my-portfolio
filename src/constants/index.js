import javascript from "../assets/tech/javascript.png";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import reactjs from "../assets/tech/reactjs.png";
import tailwind from "../assets/tech/tailwind.png";
import git from "../assets/tech/git.png";
import crowdfunding from "../assets/projects/crowdfunding.png";
import onlineCoWorkLottery from "../assets/projects/online-cowork-lottery.png";
import bubbleBlowers from "../assets/projects/bubbleblowers.png";
import ecommerce from "../assets/projects/ecommerce.png";
import gravity from "../assets/projects/gravity.png";
import portfolio from "../assets/projects/portfolio.png";
import austinAvatar from "../assets/testimonials/austin-avatar.png";
import sallyAvatar from "../assets/testimonials/sally-avatar.png";
import matheusAvatar from "../assets/testimonials/matheus-avatar.png";
import camiAvatar from "../assets/testimonials/cami-avatar.png";
import kristenAvatar from "../assets/testimonials/kristen-avatar.png";

export const technologies = [
  {
    id: 1,
    name: "HTML",
    icon: html,
  },
  {
    id: 2,
    name: "CSS",
    icon: css,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: javascript,
  },
  {
    id: 5,
    name: "React",
    icon: reactjs,
  },
  {
    id: 5,
    name: "Git",
    icon: git,
  },
  {
    id: 6,
    name: "Tailwind",
    icon: tailwind,
  },
  // {
  //   id: 7,
  //   name: "Figma",
  //   icon: figma,
  // },
];

export const secondarySkillsData = [
  {
    id: 1,
    name: "Next.js",
    icon: "TbBrandNextjs",
  },
  {
    id: 2,
    name: "Solidity",
    icon: "SiSolidity",
  },
  {
    id: 3,
    name: "Ethers.js",
    icon: "FaEthereum",
  },
  {
    id: 4,
    name: "Hardhat",
    icon: "FaHardHat",
  },
  {
    id: 5,
    name: "The Graph",
    icon: "SiGraphql",
  },
  {
    id: 6,
    name: "GraphQL",
    icon: "SiGraphql",
  },
  {
    id: 7,
    name: "Node.js",
    icon: "SiNodedotjs",
  },
  {
    id: 8,
    name: "Typescript",
    icon: "SiTypescript",
  },
  {
    id: 9,
    name: "Angular",
    icon: "SiAngular",
  },
  {
    id: 10,
    name: "SASS",
    icon: "SiSass",
  },
  // {
  //   id: 11,
  //   name: "Zapier",
  // },
  // {
  //   id: 12,
  //   name: "Mailerlite",
  // },
];

export const projects = [
  {
    id: 1,
    name: "My Portfolio",
    type: "Web2 / Web3",
    about:
      "I had a lot of fun creating this portfolio website! I implemented neumorphic design with Tailwind CSS, React hooks, various libraries such as Masonry, CSS animations that are activated on scroll/hover, Email.js with error handling and fetched data from the Hashnode API using GraphQL.",
    tech: "#React #HashnodeAPI #GraphQL #Tailwind",
    url: "https://hayleyiscoding.com",
    github: "https://github.com/hayleyiscoding/my-portfolio",
    image: portfolio,
  },
  {
    id: 2,
    name: "The Online CoWork Lottery",
    type: "Web3",
    about:
      "I was given funding to build a blockchain start-up as part of the 3-month Women Build Web3 / Encode Club Accelerator program. I created a 'coworking lottery' for women who work online to raise funding for their online businesses. I presented this project on Dec 22nd, 2022.",
    tech: "#Nextjs #Solidity #Hardhat #Ethers #AirtableAPI",
    url: "https://kiddo-online-cowork-front-end.vercel.app/",
    github: "https://github.com/hayleyiscoding/online-cowork-front-end",
    image: onlineCoWorkLottery,
  },
  {
    id: 3,
    name: "Crowdfunding dApp",
    type: "Web3",
    about:
      "My team and I built this decentralised app as our final project for the Encode Solidity Bootcamp. It is an app that is similar to Kickstart or GoFundMe - except that users can make and receive donations in cryptocurrencies.",
    tech: "#React #Solidity #Ethers #Hardhat #Thirdweb",
    url: "https://crowdfunding-tau-three.vercel.app/",
    github: "https://github.com/hayleyiscoding/crowdfunding-blockchain-app",
    image: crowdfunding,
  },
  {
    id: 4,
    name: "BubbleBlowers Swim School",
    type: "Web2",
    about:
      "A one-page website that I created for a freelance client who runs a swim school. It includes connection to WhatsApp, Google Reviews and Google Maps. The client reported a large increase in student sign-ups after the website launch.",
    tech: "#HTML #CSS #Javascript",
    url: "https://crowdfunding-tau-three.vercel.app/",
    github: "https://github.com/hayleyiscoding/crowdfunding-blockchain-app",
    image: bubbleBlowers,
  },
  {
    id: 5,
    name: "E-Commerce App",
    type: "Web2",
    about:
      "An online clothing store that I created to practice React hooks and logic. Users can add their item/s to the cart (which pops out as a sidebar), sort the items by one size or multiple sizes, and flip the images to see the back and front views of the clothing.",
    tech: "#React",
    url: "https://react-shopping-cart-azure.vercel.app/",
    github: "https://github.com/hayleyiscoding/react-shopping-cart",
    image: ecommerce,
  },
  {
    id: 6,
    name: "Coding Gravity Animation",
    type: "Web2",
    about:
      "A fun animation that I created during my Javascript studies. In this animation, balls fall from the top of the viewport and bounce at the bottom of the viewport as if they are responding to gravity. I used the HTML Canvas element.",
    tech: "#Javascript #HTMLCanvas",
    url: "https://react-shopping-cart-azure.vercel.app/",
    github: "https://github.com/hayleyiscoding/react-shopping-cart",
    image: gravity,
  },
];

// export const publications = [
//   {
//     id: 1,
//     date: "Aug 14, 2022",
//     title: "Storing Data on IPFS using Web3.Storage",
//     featured: "",
//     url: "https://hayleyiscoding.hashnode.dev/storing-data-on-ipfs-using-web3storage",
//   },
//   {
//     id: 2,
//     date: "Aug 9, 2022",
//     title: `Add a 'Connect Wallet' Button to Your Website - Next.js,
//     and RainbowKit Edition`,
//     featured: "",
//     url: "https://hayleyiscoding.hashnode.dev/add-a-connect-wallet-button-to-your-website-nextjs-and-rainbowkit-edition",
//   },
//   {
//     id: 3,
//     date: "Aug 8, 2022",
//     title: `Add a 'Connect Wallet' Button to Your Website - Vanilla JS
//     Edition`,
//     featured: "",
//     url: "https://hayleyiscoding.hashnode.dev/add-a-connect-wallet-button-to-your-website-vanilla-js-edition",
//   },
//   {
//     id: 4,
//     date: "Aug 3, 2022",
//     title: `Write Your First Solidity Smart Contract in the Next 10
//     Minutes`,
//     featured: "",
//     url: "https://hayleyiscoding.hashnode.dev/write-your-first-solidity-smart-contract-in-the-next-10-minutes",
//   },
//   {
//     id: 5,
//     date: "Aug 3, 2022",
//     title: `Web 3 for Beginners`,
//     featured: "** Featured on Hashnode",
//     url: "https://hayleyiscoding.hashnode.dev/web-3-for-beginners",
//   },
// ];

export const educationData = [
  {
    id: 1,
    type: "Education",
    date: `Jan 2001 - Dec 2004 (4 years)`,
    title: "Bachelor of Science Honours (Biomolecular Technology)",
    place: "University of KwaZulu Natal, South Africa",
    body: "I completed my university degree in 2003 - a triple major of Biochemistry, Genetics and Microbiology, with minors in Computer Science, Mathematics, Statistics and Business Management. I graduated 'Summa Cum Laude' (with highest distinction) and also received many Certificates of Merit during this degree - including Computer Science, Molecular Population Genetics and Diagnostics and for Protein Toxins in Cell Biology and Pathology. The title of my thesis was: 'The Chicken Embryo Model System and the Real-Time Polymerase Chain Reaction for the testing of invasion of HT1080 cells (lung cancer cells)'",
  },
  {
    id: 2,
    type: "Education",
    date: "2021 - 2022",
    title: "Full-Stack Web Developer Bootcamp (MERN Stack)",
    place: "AltCampus (Online)",
    body: "This was the start of my first formal coding studies. I had previously built websites using Shopify, Wordpress.org and Squarespace, but I was interested in learning how to code complex software from scratch. During the bootcamp I learnt HTML, CSS, Javascript, Node.js and React.",
  },
  {
    id: 3,
    type: "Education",
    date: "August 2022",
    title: "30 Days of Web3",
    place: "Women Build Web3, Online",
    body: "I was accepted to participate in '30 Days of Web3' - a project-based curriculum created by developers to teach students how to build full-stack decentralised apps. I built an events platform where users can add events to a website using blockchain technology. Some of the tech I used included Hardhat, Solidity,Graph Protocol, Ethers.js, IPFS, Next.js and Polygon Network.",
  },
  {
    id: 4,
    type: "Education",
    date: "October 2022 - December 2022 (2 months)",
    title: "Solidity Bootcamp",
    place: "Growic Solidity, Online",
    body: "I took part in a bootcamp to learn how to code smart contracts with Solidity. Some of my assignments included making my own ERC-20 token, creating a decentralised exchange and staking app, building a multi-sig wallet and a making a blockchain dice game using randomness.",
  },
  {
    id: 5,
    type: "Education",
    date: "February 2023 - April 2023 (2 months)",
    title: "Solidity Bootcamp",
    place: "Encode Solidity, Online",
    body: "The Encode Solidity bootcamp involved various small assignments using Angular, Nest.js and Solidity. For our final project, my team and I built a crowdfunding app similar to GoFundMe and Kickstarter where users can make and receive donations - but in cryptocurrency. We presentend this project on April 7th, 2023.",
  },
];

export const workData = [
  {
    id: 1,
    type: "Work",
    date: `Jan 2005 - June 2016`,
    title: "English Instructor, Amazon Rainforest Naturalist Guide and Travels",
    place: "Ecuador, Peru, South Korea, etc",
    body: `I decided after my degree that my next 'education' was to travel the world. In order to do this, I worked various expat jobs, such as guiding in the Amazon Rainforest and teaching English in South Korea. With this income, I was able to visit 7 continents, live on 6 of them and visit over 40 countries. I learned so much about the world - the problems that people are experiencing, technological advancements in various countries and especially important soft skills such as how to effectively communicate with people from other cultures.`,
  },
  {
    id: 2,
    type: "Work",
    date: `June 2016 - December 2017`,
    title: "Remote ESL Recruiting Manager",
    place: "ESLstarter, United Kingdom",
    body: `This was my first remote position. I was in charge of screening, interviewing and placing English Teachers in private and government schools around the world. In particular, I worked with the Colombian government to make their English program a success. I was also in charge of the company's community and social media. During this time, I lived in and travelled to many countries. This taught me invaluable remote work skills such as adaptability, discipline and team communication. I also arranged women's co-working events in Thailand and India.`,
  },
  {
    id: 3,
    type: "Work",
    date: "2018 - Current",
    title: "Remote English Teacher",
    place: "California, USA",
    body: "I work remotely part-time teaching English to professionals from around the world - such as software engineers, lawyers, accountants, etc. Also, university students and children. My students mostly come from South Korea, Japan, Saudi Arabia, Oman, Brazil and Turkey.",
  },
  {
    id: 4,
    type: "Work",
    date: "January 2022",
    title: "Freelance Web Developer",
    place: "Bubble Blowers Swim School, Pietermaritzburg, South Africa",
    body: "I coded a website using HTML/CSS/Javascript for a swim school in South Africa. I made it mobile responsive, added the ability for potential students to contact my client via Whatsapp, added a Google Map, Google Reviews and a Google-My-Business listing. The client reported a large number of student sign-ups after the website went live.",
  },
  {
    id: 5,
    type: "Work",
    date: "September 2022 - December 2022 (3 months)",
    title: "Blockchain Accelerator Program for Women",
    place: "Women Build Web3, Online",
    body: "I was selected to receive funding from 'Women Build Web3' to build a blockchain start-up from scratch. I built a coworking lottery for women who work online to raise funds for their online businesses. I presented this project on Dec 22nd, 2022. Some of the tech I used included Solidity, Chainlink, Airtable API, Hardhat, Ether.js, RainbowKit, Polygon Network, etc.",
  },
];

export const workshops = [
  {
    id: 1,
    title: "Building on Polygon",
    speaker: "Rahat Chowdhury",
    company: "Polygon Network",
    about: `The most widely used Ethereum scaling ecosystem`,
    url: `https://polygon.technology/`,
  },
  {
    id: 2,
    title: "Intro to Solidity",
    speaker: "Patrick Collins",
    company: "Cyfrin",
    about: `Blockchain Engineer & Advocate`,
    url: `https://cyfrin.io`,
  },
  {
    id: 3,
    title: "Understanding Web3 Architecture",
    speaker: "Nader Dabit",
    company: "Aave and Lens Protocol",
    about: `Director of Developer Relations`,
    url: `https://nader.arweave.dev/`,
  },
  {
    id: 4,
    title: "Building API's with The Graph",
    speaker: "Cami",
    company: "Fuel Network and Women Build Web3",
    about: `Head of DevRel`,
    url: `https://camiinthisthang.substack.com/`,
  },
  {
    id: 5,
    title: "Interacting with Contracts (Wagmi)",
    speaker: "Dhaiwat Pandya",
    company: "Fuel Network",
    about: `Developer Relations`,
    url: `https://www.dhaiwat.xyz/`,
  },
  {
    id: 6,
    title: "Speedrunning Ethereum",
    speaker: "Austin Griffith and Eda",
    company: "Speedrun Ethereum",
    about: `A curriculum that teaches you how to write smart contracts and build apps on Ethereum`,
    url: `https://speedrunethereum.com/`,
  },
  {
    id: 7,
    title: "Building on Filecoin - Web3.Storage",
    speaker: "Dawn Kelly",
    company: "Developer Advocate - Filecoin",
    about: `A decentralised storage network designed to store humanity's most important information`,
    url: `https://filecoin.io/`,
  },
  {
    id: 8,
    title: "Building Web3 Products",
    speaker: "Katia Banina",
    company: "Head of Product at Wintermute and Bebop",
    about:
      "A decentralized trading platform that delivers a breakthrough in user experience for trading in DeFi",
    url: `https://bebop.xyz/`,
  },
  {
    id: 9,
    title: "Intro to Next.js",
    speaker: "Lee Robinson",
    company: "VP of Developer Experience at Vercel",
    about: "Helping developers build a faster web",
    url: "https://www.3ekv.com/",
  },

  {
    id: 10,
    title: "AMA",
    speaker: "Ekram Ahmed",
    company: "Founder of 3EKV",
    about:
      "A brand communications firm with a methodology to help technology organizations convey their differentiated role and relevance",
    url: "https://www.3ekv.com/",
  },
  {
    id: 11,
    title: "VC Panel",
    speaker: "Kinjal Shah and Yuan Han Li",
    company: "Blockchain Capital",
    about: "A leading venture firm in the blockchain industry",
    url: `https://blockchain.capital/`,
  },
  {
    id: 12,
    title: "Legals of Fundraising",
    speaker: "Natalya",
    company: "Humphreys Law",
    url: `https://humphreys.law/`,
    about: `A focused, full-service law firm advising clients in the technology and media sectors`,
  },
  {
    id: 13,
    title: "Fundraising",
    speaker: "Nicola Santoni",
    company: "Lemniscap",
    about:
      "Investment firm specialising in investments in emerging cryptoassets & blockchain startups",
    url: `https://lemniscap.com/`,
  },
  {
    id: 14,
    title: "Communications & Marketing",
    speaker: "CJ Huntzinger",
    company: "Galaxy Digital Ventures",
    about:
      "A digital asset and blockchain leader helping institutions, startups, and qualified individuals shape a changing economy",
    url: `https://www.galaxy.com/`,
  },
  {
    id: 15,
    title: "The Startup Method and Grants",
    speaker: "Anthony Beaumont",
    company: "Encode Club",
    about: `A web3 education community`,
    url: `https://www.encode.club/`,
  },
  {
    id: 16,
    title: "Design Workshop",
    speaker: "Matko",
    company: "Encode Club",
    about: `A web3 education community`,
    url: `https://www.encode.club/`,
  },
];

export const moreAboutMeData = [
  {
    id: 1,
    title: "Featured on Hashnode",
    text: `My first web3 article - Web3 For Beginners - was featured on Hashnode.`,
  },
  {
    id: 2,
    title: "Journalism Superstar NFT",
    text: `I received a "Journalism Superstar" NFT reward during "30 Days of Web3"`,
  },
  {
    id: 3,
    title: "Interviewed as Remote Work Expert",
    text: `I have been interviewed on Refinery29.com and CoWorker.com as an expert on working remotely`,
  },
  {
    id: 4,
    title: "Certificate of Merit (Computer Science)",
    text: `I received a Certificate of Merit for Computer Science at university`,
  },
  {
    id: 5,
    title: "SuperTutor Award",
    text: `I received a SuperTutor Award - Recognized for outstanding skills as an Online English Instructor`,
  },
  {
    id: 6,
    title: "Women's Campus Bursary Award",
    text: `I was the recipient of the "Women's Campus Bursary" during my final year at university - awarded to a woman on campus of high integrity and excellence.`,
  },
  {
    id: 7,
    title: "Advanced Scuba Diving Certification",
    text: `I completed my advanced PADI Scuba Diving Certification in the Phillipines in 2007`,
  },
  {
    id: 8,
    title: "Promoted to Head Teacher",
    text: `I was promoted to head teacher during my first year of teaching English in South Korea`,
  },
  {
    id: 9,
    title: "Graduated Summa Cum Laude",
    text: `I graduated my university degree "summa cum laude" - this is with highest honours.`,
  },
  {
    id: 10,
    title: "Stood on 7 Continents",
    text: `I achieved my dream of standing on 7 continents and I've lived on 6 of them - I have lived in South Africa, Canada, South Korea, Thailand, India, Australia, Ecuador and Peru.`,
  },
];

export const testimonialData = [
  {
    id: 1,
    avatar: matheusAvatar,
    name: "Matheus Pagani",
    company: "CEO, BFT Solutions",
    testimonial: `Congratulations @hayleyiscoding! You have 'mined' this NFT with true talent and enduring effort! Super deserved. You are 🔥`,
  },
  {
    id: 2,
    avatar: sallyAvatar,
    name: "Sally",
    company: "Bubble Blowers Swim School",
    testimonial:
      "Hayley did an amazing job with our website! She really captured the essence of what Bubble Blowers is all about. I was able to increase my student numbers dramatically after the website launch.",
  },
  {
    id: 3,
    avatar: austinAvatar,
    name: "Austin Griffith",
    company: "SpeedRunEthereum.com",
    testimonial:
      "Awesome work getting through the speed run!! Let me know how I can help along the way. Keep building and keep learning!",
  },
  {
    id: 4,
    avatar: camiAvatar,
    name: "Cami",
    company: "Head of DevRel, Fuel Network",
    testimonial: "👏👏👏👏 Proud of you!",
  },
  {
    id: 5,
    avatar: kristenAvatar,
    name: "Kristen",
    company: "Women Build Web3",
    testimonial:
      "Hayley, holy smokes! This was such an awesome article to read... You've got yourself a new Hashnode subscriber :D",
  },
  {
    id: 6,
    avatar: camiAvatar,
    name: "Cami",
    company: "Head of DevRel, Fuel Network",
    testimonial: "👏👏👏👏 Proud of you!",
  },
  {
    id: 7,
    avatar: kristenAvatar,
    name: "Kristen",
    company: "Women Build Web3",
    testimonial:
      "Hayley, holy smokes! This was such an awesome article to read... You've got yourself a new Hashnode subscriber :D",
  },
  {
    id: 8,
    avatar: austinAvatar,
    name: "Austin Griffith",
    company: "SpeedRunEthereum.com",
    testimonial:
      "Awesome work getting through the speed run!! Let me know how I can help along the way. Keep building and keep learning!",
  },
];
