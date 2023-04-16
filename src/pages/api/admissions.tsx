import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		const {
			name,
			email,
			phone,
			adhaarId,
			fees,
			sbin,
		} = req.body;
		console.log(req.body)
		// console.log(req.files)

		const formData = new FormData();
		formData.append('name', name);
		formData.append('email', email);
		formData.append('phone', phone);
		formData.append('adhaarId', adhaarId);
		formData.append('fees', fees);
		formData.append('sbin', sbin);
		formData.append('documents', req.files);
		console.log(formData)
		const response = await axios.post('https://documentstore.tusqasi.repl.co/api/upload', {
			method: 'POST',
			body: formData,
		});
		console.log("Done")
		// Handle form submission
		res.send("Recived data at next end point")
	} else {
		res.status(405).send('Method not allowed.');
	}
}
