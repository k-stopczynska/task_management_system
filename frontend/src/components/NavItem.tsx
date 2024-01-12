import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavItem = ({ title, icon, alt, url }: {title: string, icon: string, alt:string, url: string}) => {
  return (
		<li>
          <Link className='flex flex-col items-center cursor-pointer border-b-2 border-b-primary-200 py-[0.6rem] px-[1.2rem] transition-all hover:bg-primary-200 focus:bg-primary-200 rounded-lg' href={url}>
              <Image src={icon} alt={alt} width={60} height={60} />
              <span>{title}</span>
			</Link>
		</li>
  );
}

export default NavItem