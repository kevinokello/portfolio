// import React from 'react'

// import Link from "next/link"
// import Image from "next/image"

// const Footer = () => {
//   const data = {
//     "category 1": [
//       {
//         name: "Link",
//         url:"Link",
//       },
//       {
//         name: "Link",
//         url:"Link",
//       },
//       {
//         name: "Link",
//         url:"Link",
//       },
//     ],
//     "category 2": [
//       {
//         name: "Link",
//         url:"Link",
//       },
//       {
//         name: "Link",
//         url:"Link",
//       },
//       {
//         name: "Link",
//         url:"Link",
//       },
//       {
//         name: "Link",
//         url:"Link",
//       },
//       {
//         name: "Link",
//         url:"Link",
//       },
//     ],
//     "category 3": [
//       {
//         name: "Link",
//         url:"Link",
//       },
//       {
//         name: "Link",
//         url:"Link",
//       },
//       {
//         name: "Link",
//         url:"Link",
//       },
//       {
//         name: "Link",
//         url:"Link",
//       },
//     ],
//     "category 4": [
//       {
//         name: "Link",
//         url:"Link",
//       },
//       {
//         name: "Link",
//         url:"Link",
//       },
//       {
//         name: "Link",
//         url:"Link",
//       },
//     ],
//   }
//   return (
//     <footer className="relative overflow-hidden z-10 dark:text-textDarkSecondary text-textSecondary bg-paper dark:bg-paperDark shadow-normal">

//       <div className="container max-w-[1140px] px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
//         <div className="w-64 mb-10 md:mb-0 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
//           <a className="flex items-center md:justify-start justify-center dark:text-white text-gray-800">
//             <Image src="/logo.svg" alt="logo" width={36} height={36} />
//             <span className="ml-3 text-2xl font-semibold">Portfolio</span>
//           </a>
//           <p className="mt-2 text-md text-textSecondary opacity-80">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit, Ipsam non.
//           </p>
//         </div>
//         <div className="flex-grow flex flex-wrap justify-end md:pl-20 -mb-10 md:text-left text-center flex-1">
//           {Object.keys(data).map((dt, dtIndex) => (
//             <div key={dtIndex} className="lg:w-1/4 md:w-1/2 w-full px-4">
//               <h2 className="title-font font-medium dark:text-white capitalize text-gray-800 tracking-wider text-sm mb-3">
//                 {dt}
//               </h2>
//               <nav className="list-none mb-10">
//                 {data[Object.keys(data)[dtIndex]].map(({ name, url, icon }, index) => (
//                   <li key={index}>
//                     <Link href={url}>
//                       <div className="text-gray-400 text-sm hover:text-gray-800 dark:hover:text-white cursor-pointer">
//                         {name}
//                       </div>
//                     </Link>
//                   </li>
//                 ))}
//               </nav>
//             </div>
//           ))}

//         </div>
//       </div>  

//     </footer>
//   )
// }

// export default Footer