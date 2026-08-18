import reserv from "../../public/reserv.png";
import buildResume from "../../public/buildResume.png";
import checkIn from "../../public/check-in-now.png";
import squadGame from "../../public/squadGame.png";
import Weather from "../../public/Weather.png";
import memory from "../../public/memory.png";
import chatApp from "../../public/chat-app.png";
import iu from "../../public/iu.png";
import craxy from "../../public/craxy.png";

interface GalleryItem {
  id: number;
  imageSrc: any;
  title: string;
  slug: string;
  description: string;
  link: string;
  technologies: string[];
  details: string;
  challenges: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 9,
    imageSrc: craxy,
    title: "Craxy AI",
    slug: "craxy",
    description: "AI-powered proposal tracking and RFP automation platform",
    link: "https://craxy.ai",
    technologies: ["Next.js", "TypeScript", "Zustand"],
    details: `
      Contributed to a production AI platform focused on proposal tracking and RFP automation.
      Built user-facing features with Next.js and TypeScript, including a rich-text editor and
      proposal generation workflow. Integrated REST APIs for authentication, proposal management,
      and AI-powered services. Worked closely with designers and backend engineers to turn product
      requirements into reusable and scalable interfaces.
    `,
    challenges: `
      One of the main challenges was building complex interfaces around dynamic proposal content
      while keeping the user experience simple. The application also required reliable API
      integration across authentication, proposal management, and AI services, while maintaining
      reusable UI patterns that could scale as new features were introduced.
    `,
  },

  {
    id: 8,
    imageSrc: iu,
    title: "Industry Umbrella",
    slug: "industry-umbrella",
    description: "Full-stack e-commerce platform",
    link: "https://iu-fast.vercel.app",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
    details: `
      Built and maintained a full-stack e-commerce platform independently using Next.js,
      TypeScript, Node.js, Express, and MongoDB. Implemented JWT-based authentication,
      product management, filtering, REST APIs, and an admin dashboard. Integrated Cloudinary
      for media management and Stripe for online payments, covering both customer-facing
      functionality and administrative workflows.
    `,
    challenges: `
      The main challenge was connecting multiple parts of the application into one reliable
      workflow. Authentication, product management, media uploads, payments, and the admin
      dashboard all depended on consistent communication between the frontend and backend.
      Designing the API flow and keeping the application manageable while adding new features
      required careful separation between UI, business logic, and data handling.
    `,
  },

  {
    id: 3,
    imageSrc: checkIn,
    title: "Check In Now",
    slug: "check-in",
    description: "School management system with QR-based attendance",
    link: "https://check-in-now.vercel.app",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    details: `
      Built a school management system centered around automated attendance workflows.
      The project uses QR-code-based interactions to connect users with dynamic forms and
      simplify attendance and data collection. The interface was designed to make the
      process quick and straightforward for users while keeping the collected information
      structured for management.
    `,
    challenges: `
      The main challenge was designing an attendance workflow that required as little manual
      interaction as possible. QR-based flows also needed to work reliably across different
      devices and screen sizes, while the resulting data had to remain consistent throughout
      the process.
    `,
  },

  {
    id: 1,
    imageSrc: reserv,
    title: "Reserv Best",
    slug: "reserv",
    description: "Wedding venue reservation platform for Kabul",
    link: "https://reserv.vercel.app",
    technologies: ["Next.js", "TypeScript", "Zustand"],
    details: `
      Built a full-stack reservation platform focused on helping users discover and reserve
      wedding hotels and venues in Kabul. The project covers the customer-facing reservation
      experience and provides a structured way to present available venues and their details.
      The application was designed around making the reservation process easier than handling
      venue selection manually.
    `,
    challenges: `
      The main challenge was designing a reservation flow that could remain simple for users
      while handling different venue information and booking states. Presenting enough
      information to help users make a decision without making the interface overwhelming
      was also an important part of the project.
    `,
  },

  {
    id: 2,
    imageSrc: buildResume,
    title: "Build Resume",
    slug: "build-resume",
    description: "Dynamic resume builder with customizable templates",
    link: "https://buildResume.vercel.app",
    technologies: ["Next.js", "TypeScript", "Zustand"],
    details: `
      Built a dynamic resume-building application that allows users to create resumes using
      predefined templates. The application focuses on making resume creation more flexible
      by allowing users to manage their information and see it presented through different
      layouts rather than manually formatting every section.
    `,
    challenges: `
      The main challenge was managing dynamic resume data while keeping the selected template
      synchronized with the user's content. Different templates also need to represent the
      same underlying information without making the data structure dependent on a single
      design.
    `,
  },

  {
    id: 4,
    imageSrc: squadGame,
    title: "Squad Game",
    slug: "squad-game",
    description: "Interactive browser-based brain game",
    link: "https://squadGame.vercel.app",
    technologies: ["Next.js", "TypeScript", "Zustand"],
    details: `
      Built a browser-based brain game focused on interactive gameplay and user input.
      The project was designed as a small but complete frontend application, handling game
      state, user interactions, and the flow between different stages of gameplay.
    `,
    challenges: `
      The main challenge was keeping the game state predictable while responding immediately
      to user actions. Even a small game requires careful handling of state changes, timing,
      and the transition between different game states to avoid inconsistent behaviour.
    `,
  },

  {
    id: 5,
    imageSrc: Weather,
    title: "Weather App",
    slug: "weather",
    description: "Weather application built with Vue.js",
    link: "https://weather-masih.vercel.app/",
    technologies: ["Vue.js", "JavaScript"],
    details: `
      Built a weather application with Vue.js that presents weather information through a
      simple and responsive interface. The project was focused on working with external data
      and transforming it into information that is easy for users to understand.
    `,
    challenges: `
      The main challenge was handling external weather data and presenting different response
      states clearly. The interface needed to account for loading, successful responses, and
      cases where the requested weather information could not be retrieved.
    `,
  },

  {
    id: 6,
    imageSrc: memory,
    title: "Memory Card Game",
    slug: "memory",
    description: "Interactive memory matching game",
    link: "https://memory-game-five-beryl.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Zustand"],
    details: `
      Built a simple memory card game where players flip cards and try to find matching pairs.
      The project focuses on interactive UI behaviour and client-side game state, including
      tracking selected cards, matched pairs, and the current state of the game.
    `,
    challenges: `
      The main challenge was managing the sequence of card selections correctly. The game
      needs to prevent conflicting interactions while two cards are being evaluated and then
      update the state correctly whether the cards match or not.
    `,
  },

  {
    id: 7,
    imageSrc: chatApp,
    title: "Chat Application",
    slug: "chat",
    description: "Real-time chat application with Socket.IO",
    link: "https://chattome.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Node.js", "Socket.IO"],
    details: `
      Built a real-time chat application using Next.js, TypeScript, Node.js, and Socket.IO.
      The project focuses on real-time communication, allowing messages to be exchanged
      between connected users without requiring the page to be manually refreshed.
    `,
    challenges: `
      The main challenge was handling real-time communication and keeping the UI synchronized
      with events received from the server. Socket connections can change independently from
      the application's normal request-response flow, so the client needs to handle incoming
      events and connection states without creating inconsistent UI behaviour.
    `,
  },
];