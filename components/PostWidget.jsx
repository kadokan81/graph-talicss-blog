import moment from 'moment';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
	const [relatedPosts, setRelatedPosts] = useState([]);

	useEffect(() => {
		if (slug) {
			getSimilarPosts(categories, slug).then((res) => setRelatedPosts(res));
		} else {
			getRecentPosts().then((res) => setRelatedPosts(res));
		}
	}, [slug]);
	return (
		<div className='bg-white p-8 rounded-lg mb-8 shadow-lg'>
			<h3 className='text-xl mb-8 font-semibold border-b pb-4'>
				{slug ? 'Related Posts' : 'Recent Posts'}
			</h3>
			{relatedPosts.map((post, ind) => (
				<div className='flex gap-4 mb-4' key={post.title}>
					<img
						className='h-10 w-20 max-w-20 rounded-lg'
						src={post.featuredImage.url}
					/>
					<div className='flex-grow '>
						<p className='text-xs font-gray-500'>
							{moment(post.createdAt).format('MMM DD, YYYY')}
						</p>
						<Link href={`/post/${post.slug}`}>
							<p className='cursor-pointer text-sm font-gray-600'>
								{post.title}
							</p>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default PostWidget;
