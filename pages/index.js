import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		image:
			'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
		title: 'A first meetup',
		address: 'Some address 10, 2355, Some City',
		description: 'This is the first meetup',
	},
	{
		id: 'm2',
		image:
			'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
		title: 'A second meetup',
		address: 'Some address 10, 2355, Some City',
		description: 'This is the second meetup',
	},
];

function HomePage() {
	return (
		<Layout>
			<MeetupList meetups={DUMMY_MEETUPS} />
		</Layout>
	);
}

export default HomePage;
