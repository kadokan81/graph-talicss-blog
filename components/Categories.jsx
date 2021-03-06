import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCategories } from '../services';

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((res) => setCategories(res));
	}, []);
	return (
		<div className='bg-white p-8 rounded-lg mb-8 shadow-lg'>
			<h3 className='text-xl mb-8 font-semibold border-b pb-4'>Categories </h3>
			{categories.map((category) => (
				<Link href={`/category/${category.slug}`} key={category.slug}>
					<span className='block cursor-pointer mb-4 pb-4'>
						{category.name}
					</span>
				</Link>
			))}
		</div>
	);
};

export default Categories;
