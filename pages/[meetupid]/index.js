import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
	return (
		<MeetupDetail
			image="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
			title="A first meetup"
			address="Some street, 5, Some City"
			description="This is a first meetup"
		/>
	);
}

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{
				params: {
					meetupId: 'm1',
				},
			},
			{
				params: {
					meetupId: 'm2',
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId;

	return {
		props: {
			meetupData: {
				image:
					'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',

				id: meetupId,

				title: 'A first meetup',

				address: 'Some street, 5, Some City',

				description: 'This is a first meetup',
			},
		},
	};
}

export default MeetupDetails;
