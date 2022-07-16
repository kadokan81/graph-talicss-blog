import Link from 'next/link';
import moment from 'moment';

const PostCard = ({ post }) => {
	return (
		<div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
			<div className='relative overflow-hidden pb-80 mb-6'>
				<img
					className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg'
					src={`${post.featuredImage.url}`}
					alt={post.title}
				/>
			</div>
			<h2 className='transition duration-700 text-center  mb-2 hover:text-pink-600 text-3xl font-semibold '>
				<Link href={`/post/${post.slug}`}>{post.title}</Link>
			</h2>
			<div className='block lg:flex   text-center items-center justify-center gap-4'>
				<div className='flex items-center justify-center mb-4 lg:mb-8'>
					<img
						className='h-10 w-10 object-cover shadow-lg rounded-full'
						src={`${post.author.photo.url}`}
						alt={post.author.name}
					/>
					<h3 className='text-gray-700 ml-4 text-lg'>{post.author.name}</h3>
				</div>
				<div className='font-medium text-gray-700  mb-4 lg:mb-8 '>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 inline mr-2 text-pink-500'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
						/>
					</svg>
					<span className='align-middle'>
						{moment(post.createdAt).format('MMM DD, YYYY')}
					</span>
				</div>
			</div>
			<p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>
				{post.excerpt}
			</p>
			<div className='text-center'>
				<Link href={`/post/${post.slug}`}>
					<span className='transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
						Continue Reading
					</span>
				</Link>
			</div>
		</div>
	);
};

export default PostCard;
