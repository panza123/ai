// "use client"
// import React from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';


// interface NavLinkProps {
//   item: {
//     path: string;
//     tittle: string; // Corrected typo from item.tittle to item.title
//   };
//   index: number;
// }
// // {used to navigate link when clicked}

// const NavLink: React.FC<NavLinkProps> = ({ item}) => {
//     const pathname = usePathname()
//   return (
//     <div>

//    <Link href={item.path} key={item.id}  className='text-2xl'>{item.title}</Link>
//     </div>

//   );
// };

// export default NavLink;