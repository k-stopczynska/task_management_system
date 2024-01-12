import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Task Management System',
	description: 'system for managing your tasks',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='bg-light-100 text-dark-900 grid grid-flow-col grid-cols-[20%_80%] h-[100svh] p-1'>
        <Nav />
        
				{children}
			</body>
		</html>
	);
}
