import React, { useState } from 'react';
import axios from 'axios';
import Nav from './components/nav';
import { Bebas_Neue, Old_Standard_TT, Prompt } from 'next/font/google';

const oldtt = Old_Standard_TT({ subsets: ['latin'], weight: ['400', '700'] });
const bebas = Bebas_Neue({
	subsets: ['latin'], weight: ['400']
});
const prompt = Prompt({
	subsets: ['latin'],
	weight: ['400']
})
const AdminPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post('https://authbase.tusqasi.repl.co/api/createUser', {
				email,
				password,
			});
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	return (<>
		<Nav />
		<div className="flex justify-center items-center content-center h-screen w-full">
			<form onSubmit={handleSubmit} className="flex flex-col  ">
				<span className={bebas.className + ' text-5xl'}>Create a new user:</span>
				<input className="      p-3 text-4xl " placeholder="Email"
					type="email"
					value={email}
					onChange={(event) => setEmail(event.target.value)}
				/>
				<input type="password" className="  p-3 text-4xl  " placeholder="Password"
					value={password}
					onChange={(event) => setPassword(event.target.value)} />
				<button className={bebas.className + ' text-5xl hover:bg-sky-300 w-fit '}>Create user</button>
			</form>
		</div>
	</>
	);
};

export default AdminPage;

