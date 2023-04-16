import Image from 'next/image';
// import { motion } from "framer-motion"
import { motion, AnimatePresence } from "framer-motion"

import { Old_Standard_TT, Bebas_Neue, Prompt } from 'next/font/google';
import Viewer from './components/pdfviewer';
import { useState } from 'react';
const oldtt = Old_Standard_TT({ subsets: ['latin'], weight: ['400', '700'] });
const bebas = Bebas_Neue({
	subsets: ['latin'], weight: ['400']
});
const prompt = Prompt({
	subsets: ['latin'],
	weight: ['400']
})
const AdmissionApproval = () => {
	/// get pdfs and show pdfs
	const [isAdhaarVisible, setIsAdhaarVisible] = useState(false);
	const [isMarksheetVisible, setIsMarkSheetVisible] = useState(false);
	const [isCapAllotmentVisible, setIsCapAllotmentVisible] = useState(false);
	const visiblities = [
		[isAdhaarVisible, setIsAdhaarVisible],
		[isMarksheetVisible, setIsMarkSheetVisible],
		[isCapAllotmentVisible, setIsCapAllotmentVisible]]
	return (<>
		<nav className="flex bg-black text-slate-50 text-5xl text-serif h-[2em]
		justify-start items-center">
			<div className={oldtt.className + " font-normal ml-10"}>SGGSIE&T</div>
		</nav>

		<div className='flex-col justify-center items-center w-100'>
			<div className='z-10 absolute px-[1%] py-[-100px] '>
				<span className={bebas.className + ' bg-[#DE6DD3] text-5xl '}>
					ADMISSION CONFIRMATION
				</span>
			</div>
			<Image
				// className="w-[100%] "
				width={2000}
				height={100}
				src={"/images/confirmation_page.png"} alt="" />
			<div className='flex justify-around mt-20 mb-20'>
				{!isAdhaarVisible && !isCapAllotmentVisible && !isMarksheetVisible ? ["Adhaar", "12th Marksheet", "CAP ALLOTMENT LETTER"]
					.map((name, _idx) =>
						<div className={
							bebas.className +
							' bg-cyan-200 w-[300px] h-[300px] \
							grid place-content-center text-6xl \
							border-4 border-black \
							text-center'}
							onClick={() => visiblities[_idx][1](visiblities[_idx][0] ? false : true)


							}>
							{name}
						</div>


					) : <></>}
				{
					isAdhaarVisible ? <Viewer url="https://documentstore.tusqasi.repl.co/1681638699350-153135763-prachi-adhaar.pdf" cb={setIsAdhaarVisible} /> :
						isMarksheetVisible ? <Viewer url="https://documentstore.tusqasi.repl.co/1681638699319-395237712-prachi-marksheet.pdf" cb={setIsMarkSheetVisible} /> :
							isCapAllotmentVisible ? <Viewer url="" cb={setIsCapAllotmentVisible} /> : <></>


				}
			</div >

		</div >

	</>);
}

export default AdmissionApproval;
