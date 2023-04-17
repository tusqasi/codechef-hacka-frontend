import Image from 'next/image';
import axios from 'axios';
import React, { useState } from 'react';
import Nav from './components/nav';
import { Old_Standard_TT, Bebas_Neue, Prompt } from 'next/font/google';

const oldtt = Old_Standard_TT({ subsets: ['latin'], weight: ['400', '700'] });
const bebas = Bebas_Neue({
	subsets: ['latin'], weight: ['400']
});
const prompt = Prompt({
	subsets: ['latin'],
	weight: ['400']
})
const AdmissionsPage = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [fees, setFees] = useState('');
	const [sbin, setSbin] = useState('');
	const [adhaarId, setAdhaarId] = useState('');
	const [marksheet, setMarksheet] = useState(null);
	const [adhaar, setAdhaar] = useState(null);
	const [cap, setCap] = useState(null);
	const handleSubmit = async (event: any) => {
		// console.log("Handling submit")
		event.preventDefault();
		const formData = new FormData();
		if (!name
			&& !email
			&& !phone
			&& !adhaarId
			&& !fees
			&& !sbin
			&& !marksheet
			&& !adhaar
			&& !cap
		) {
			console.error("Fill correct values in the form!")
			return;
		}
		formData.append('name', name.replaceAll(' ', '_'));
		formData.append('email', email);
		formData.append('phone', phone);
		formData.append('adhaarId', adhaarId);
		formData.append('fees', fees);
		formData.append('sbin', sbin);
		formData.append('documents', marksheet, name.replaceAll(' ', '_') + "-marksheet" + ".pdf");
		formData.append('documents', adhaar, name.replaceAll(' ', '_') + "-adhaar" + ".pdf");
		formData.append('documents', cap, name.replaceAll(' ', '_') + "-cap" + ".pdf");

		try {
			const response = await axios.post('https://documentstore.tusqasi.repl.co/api/applicants_entry', formData);
			// console.info(response.data);
		} catch (error) {
			console.error(error);
		}
	};
	return (<>
		<Nav />
		<div className='flex-col justify-center items-center w-100'>
			<div className='z-10 absolute px-[1%] py-[-10%] '>
				<span className={bebas.className + ' bg-[#E8D39C] text-5xl'}>
					ADMISSION FORM
				</span>
			</div>
			<Image
				// className="w-[100%] "
				width={2000}
				height={100}
				src={"/images/students.png"} alt="" />

			<div className='flex flex-row justify-center mb-5'>
				<div className=' flex-col justify-start mt-5'>
					<h4 className={prompt.className + ' mb-1  '}>Personal Details:</h4>
					<div className='flex justify-around w-full mb-1'>
						<input type="text" placeholder='Name' className='border rounded-sm ml-1 p-1 placeholder-gray-600'
							onChange={(e) => setName(e.target.value)}
						/>
						<input type="text" placeholder='Email' className='border rounded-sm ml-1 p-1 placeholder-gray-600'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='flex justify-around'>
						<input type="text" placeholder='Phone' className='border rounded-sm ml-1 p-1 placeholder-gray-600'
							onChange={(e) => setPhone(e.target.value)}
						/>
						<input type="text" placeholder='Adhaar ID' className='border rounded-sm ml-1 p-1 placeholder-gray-600'
							onChange={(e) => setAdhaarId(e.target.value)}
						/>
					</div>
					<h4 className={prompt.className + ' mb-1  '} > Financials: </h4>
					<div className='flex justify-around w-full mb-1'>
						<input type="text" placeholder='SBIN No' className='border rounded-sm ml-1 p-1  placeholder-gray-600'
							onChange={(e) => setSbin(e.target.value)}
						/>
						<input type="text" placeholder='Fees Paid' className='border rounded-sm ml-1 p-1  placeholder-gray-600'
							onChange={(e) => setFees(e.target.value)}
						/>
					</div>
					<span>Files to upload:</span>
					<div className='flex justify-around mt-2'>
						<input type="file" className='hidden' id="marksheet"
							onChange={(e) => setMarksheet(e.target.files[0])}
						/>
						<label htmlFor="marksheet"
							className='after:content-["Marksheet"]
							after:rounded-full border-2 border-black 
							rounded-full p-1 bg-amber-100 ' >Choose </label>
						<input type="file" className='hidden' id='adhaar'
							onChange={(e) => setAdhaar(e.target.files[0])}
						/>
						<label htmlFor="adhaar"
							className='after:content-["Adhaar"]
							after:rounded-full border-2 border-black 
							rounded-full p-1 bg-amber-100 ' >Choose </label>
						<input type="file" className='hidden' id='cap'
							onChange={(e) => setCap(e.target.files[0])}
						/>
						<label htmlFor="cap"
							className='after:content-["CAP"] 
							after:rounded-full border-2 border-black 
							rounded-full p-1 bg-amber-100 ' >Choose </label>
					</div>
				</div>


			</div>
			<div className='flex w-full justify-center items-center content-center' >
				<button formAction="submit" onSubmit={handleSubmit} onClick={handleSubmit} className=' p-2 bg-gray-800 text-white font-semibold  border-4 border-black'> Submit</button>
			</div>
		</div >



	</>);
}
export default AdmissionsPage;
