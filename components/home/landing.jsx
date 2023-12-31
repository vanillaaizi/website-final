
// import Balancer from "react-wrap-balancer";
// import { DEPLOY_URL } from "@/lib/constants";

// export default function Landing() {
//   return (
//     <>
//       <div className="z-10 w-full max-w-xl px-5 xl:px-0">
//         <h1
//           className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
//           style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
//         >
//           <Balancer>Education For All</Balancer>
//         </h1>
//         <p
//           className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
//           style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
//         >
//           <Balancer>
//             AI-powered Educational expert that can give you various academic opportunities.
//           </Balancer>
//         </p>
//         <div
//           className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
//           style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
//         >
//           <a
//             className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
//             href={DEPLOY_URL}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <svg
//               className="h-4 w-4 group-hover:text-black"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M12 4L20 20H4L12 4Z"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>

//           </a>
//         </div>
//       </div>
//     </>
//   )
// }







// import Balancer from "react-wrap-balancer";
// import { DEPLOY_URL } from "@/lib/constants";
// import Image from "next/image";

// export default function Landing() {
//   return (
//     <div className="relative z-10 w-full max-w-xl px-5 xl:px-0">
//       {/* Background Image */}
//       <div
//         className="absolute top-0 left-0 w-full h-full"
//         style={{
//           backgroundImage: "url('/pp.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           opacity: "0.5",
//         }}
//       />

//       <h1
//         className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
//         style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
//       >
//         <Balancer>Education For All</Balancer>
//       </h1>
//       <p
//         className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
//         style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
//       >
//         <Balancer>
//           AI-powered Educational expert that can give you various academic opportunities.
//         </Balancer>
//       </p>
//       <div
//         className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
//         style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
//       >
//         <a
//           className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black bg-opacity-50 px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
//           href={DEPLOY_URL}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <svg
//             className="h-4 w-4 group-hover:text-black"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M12 4L20 20H4L12 4Z"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </a>
//       </div>
//     </div>
//   );
// }



import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="relative z-10 w-full max-w-xl px-5 xl:px-0">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: "url('/your-new-background-image.jpg')", // Replace with the path to your new background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.5",
        }}
      />

      <h1
        className="animate-fade-up bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-center font-display text-5xl md:text-7xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:leading-[5rem] h-60vh flex items-center justify-center"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <Balancer>Empowering Education</Balancer>
      </h1>
      <p
        className="mt-6 animate-fade-up text-center text-gray-600 opacity-0 md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer>
          Unleash Your Potential with AI-powered Learning Solutions. Explore our diverse range of educational programs designed to ignite curiosity and foster growth in learners of all ages.
        </Balancer>
      </p>
      <div
        className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        <a
          className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-purple-600 bg-purple-600 bg-opacity-90 px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-purple-600"
          href={DEPLOY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="h-4 w-4 group-hover:text-purple-600"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L20 20H4L12 4Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
