

// import Image from "next/image";
// import Link from "next/link";
// import useScroll from "@/lib/hooks/use-scroll";
// import { useSignInModal } from "./sign-in-modal";
// import UserDropdown from "./user-dropdown";

// export default function NavBar({ session }) {
//   const { SignInModal, setShowSignInModal } = useSignInModal();
//   const scrolled = useScroll(50);

//   return (
//     <>
//       <SignInModal />
//       <div
//         className={`fixed top-0 w-full ${scrolled
//           ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
//           : "bg-white/0"
//           } z-30 transition-all`}
//       >
//         <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
//           <Link href="/" className="flex items-center font-display text-2xl">
//             <Image
//               src="/n.png"
//               alt="N17R logo"
//               width="30"
//               height="30"
//               className="mr-2 rounded-sm"
//             ></Image>
//             <p>Education For All</p>
//           </Link>
//           <Link href="/" className="flex items-center font-display text-2xl">
//             <div>Chat</div>
//           </Link>
//           <div>
//             {session ? (
//               <UserDropdown session={session} />
//             ) : (
//               <button
//                 className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
//                 onClick={() => setShowSignInModal(true)}
//               >
//                 Sign In
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
"use client";
import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";

export default function NavBar({ session }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full ${scrolled
          ? "border-b border-gray-200 bg-gradient-to-b from-blue-500 to-purple-600 backdrop-blur-xl"
          : "bg-white/0"
          } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/n.png"
              alt="N17R logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            />

            <p
             className={`text-${scrolled ? "white" : "black"} bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-center font-display text-10xl md:text-14xl font-bold tracking-[-0.02em] drop-shadow-sm md:leading-[5rem] mb-8`}
             > Education For All </p>

          </Link>
          <div className="flex items-center space-x-5">
            <Link href="/" className="nav-link">
              <div
                className={`mr-4 text-${scrolled ? "white" : "black"} animate-fade-up bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-center font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:leading-[5rem]`}
              >
                Chat
              </div>
            </Link>
            <Link href="/more-educational" className="nav-link">
              <span
                className={`text-${scrolled ? "white" : "black"} animate-fade-up bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-center font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:leading-[5rem]`}
              >
                More Educational Opportunities
              </span>
            </Link>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className={`rounded-full border border-black ${
                  scrolled ? "bg-gradient-to-b from-blue-500 to-purple-600 text-black" : "bg-black text-white"
                } p-1.5 px-4 text-sm transition-all hover:bg-black hover:text-white animate-fade-up`}
                onClick={() => setShowSignInModal(true)}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
