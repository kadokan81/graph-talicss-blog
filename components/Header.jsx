import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCategories } from '../services';

const Header = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((res) => setCategories(res));
	}, []);
	return (
		<div className='container mx-auto px-10 mb-8'>
			<div className='border-b w-full inline-block border-blue-400 py-8'>
				<div className='md:float-left block'>
					<Link href='/'>
						<span className='cursor-pointer font-bold text-4xl text-white'>
							GraphCMS
						</span>
					</Link>
				</div>
				<div className='hidden md:float-left md:contents'>
					{categories.map((categorie) => (
						<Link key={categorie.slug} href={`/category/${categorie.slug}`}>
							<span className='md:float-right mt-2 align-middle text-white ml-6 font-semibold cursor-pointer'>
								{categorie.name}
							</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Header;
