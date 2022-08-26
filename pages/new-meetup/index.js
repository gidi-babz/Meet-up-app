import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Layout from '../../components/layout/Layout';

function NewMeetupPage() {
	const addMeetupHandler = (enteredMeetupData) => {
		console.log(enteredMeetupData);
	};

	return (
		<Layout>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</Layout>
	);
}

export default NewMeetupPage;
