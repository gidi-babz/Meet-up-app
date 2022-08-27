import { MongoClient } from 'mongodb';

async function handler(req, res) {
	if (req.method === 'POST') {
		const data = req.body;

		const client = await MongoClient.connect(
			'mongodb+srv://babatunde:ieF4xjDE3SOQ8clQ@cluster0.0mdz7ul.mongodb.net/?retryWrites=true&w=majority'
		);

		const db = client.db('meetups');

		const meetupsCollection = db.collection('meetups');

		const result = await meetupsCollection.insertOne(data);

		console.log(result);

		client.close();

		res.status(201).json({ message: 'Created new meetup' });
	}
}

export default handler;
