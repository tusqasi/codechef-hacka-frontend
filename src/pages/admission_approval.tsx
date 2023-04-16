import Image from 'next/image';
import { Old_Standard_TT, Bebas_Neue, Prompt } from 'next/font/google';
import Viewer from './components/pdfviewer';
import { useState } from 'react';
import Studentlist from './components/studentslist';
import StudentList from './components/studentslist';

const oldtt = Old_Standard_TT({ subsets: ['latin'], weight: ['400', '700'] });
const bebas = Bebas_Neue({
	subsets: ['latin'], weight: ['400']
});
const prompt = Prompt({
	subsets: ['latin'],
	weight: ['400']
})
const AdmissionApproval = (props: any) => {
	/// get pdfs and show pdfs
	const [currentApplicant, setApplicant] = useState('');
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
			<div className='flex items-center'>
				<StudentList names={props.approved} cb={setApplicant} />
				<div className='flex justify-around mt-20 mb-20'>
					{!isAdhaarVisible && !isCapAllotmentVisible && !isMarksheetVisible ? ["Adhaar", "12th Marksheet", "CAP ALLOTMENT LETTER"]
						.map((name, _idx) =>
							<div className={
								bebas.className +
								' bg-cyan-200 w-[300px] h-[300px] \
							grid place-content-center text-6xl \
							border-4 border-black  mr-5\
							text-center'}
								onClick={() => visiblities[_idx][1](visiblities[_idx][0] ? false : true)
								}>
								{name}
							</div>

						) : <></>}
					{
						isAdhaarVisible ? <Viewer url={"https://documentstore.tusqasi.repl.co/" + currentApplicant + "-adhaar.pdf"} cb={setIsAdhaarVisible} /> :
							isMarksheetVisible ? <Viewer url={"https://documentstore.tusqasi.repl.co/" + currentApplicant + "-marksheet.pdf"} cb={setIsMarkSheetVisible} /> :
								isCapAllotmentVisible ? <Viewer url={"https://documentstore.tusqasi.repl.co/" + currentApplicant + "-cap.pdf"} cb={setIsCapAllotmentVisible} /> : <></>
					}
				</div >
			</div>
		</div >

	</>);
}

export async function getServerSideProps() {
	const res = await fetch("https://documentstore.tusqasi.repl.co/api/notapproved");
	const approved = await res.json();
	console.log(approved);
	const names = approved.map((element, idx) => element.name);
	console.log(names)
	return { props: { approved } };
}
export default AdmissionApproval;
