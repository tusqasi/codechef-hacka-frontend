import Image from 'next/image';
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
	return (<>

		<nav className="flex bg-black text-slate-50 text-5xl text-serif h-[2em] justify-start items-center">
			<div className={oldtt.className + " font-normal ml-10"}>SGGSIE&T</div>
		</nav >

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

			<div className='flex flex-row justify-center'>
				<div className=' flex-col justify-start'>
					<h4 className={prompt.className + ' mb-1  '} > Personal Details:</h4>
					<div className='flex justify-around w-full mb-1'>
						<input type="text" placeholder='Name' className='border rounded-sm ml-1 p-1 placeholder-gray-600' />
						<input type="text" placeholder='Email' className='border rounded-sm ml-1 p-1 placeholder-gray-600' />
					</div>
					<div className='flex justify-around'>
						<input type="text" placeholder='Phone' className='border rounded-sm ml-1 p-1 placeholder-gray-600' />
						<input type="text" placeholder='Adhaar' className='border rounded-sm ml-1 p-1 placeholder-gray-600' />
					</div>
					<h4 className={prompt.className + ' mb-1  '} > Financials: </h4>
					<div className='flex justify-around w-full mb-1'>
						<input type="text" placeholder='SBIN No' className='border rounded-sm ml-1 p-1  placeholder-gray-600' />
						<input type="text" placeholder='Fees Paid' className='border rounded-sm ml-1 p-1  placeholder-gray-600' />
					</div>
					<div className=''>
						<input type="file" className='hidden' id="marksheet" />
						<label htmlFor="marksheet"
							className='after:content-["Marksheet"] after:bg-white after:rounded-full border-2 border-black rounded-full p-1 
							bg-amber-100 ' >Choose </label>
						<input type="file" className='hidden' id='adhaar' />
						<label htmlFor="adhaar"
							className='after:content-["Adhaar"] after:bg-white 
							after:rounded-full border-2 border-black 
							rounded-full p-1 bg-amber-100 ' >Choose </label>
					</div>
				</div>


			</div>
			<div className='flex w-full justify-center items-center content-center' >
				<button className=' p-2 bg-gray-800 text-white font-semibold  border-4 border-black'> Submit</button>
			</div>
		</div >



	</>);
}
export default AdmissionsPage;
