import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link'
import { motion } from "framer-motion";




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
		<motion.div className="grid">
			<nav className="flex bg-black text-slate-50 text-6xl text-serif h-[2em] justify-start items-center">
				<div className={oldtt.className + " font-normal ml-10"}>SGGSIE&T</div >
				<div className={bebas.className + ' text-2xl '}>
					<ul className='flex w-30 ml-5'>
						<Link href="/admissions" className="w-[17rem] before:block before:h-[1px] before:w-[16rem] before:bg-white hover:text-amber-200">Admissions </Link>
						<Link href="/results" className="w-[17rem] before:block before:h-[1px] before:w-[16rem] before:bg-white hover:text-amber-200">Result</Link>
						<Link href="/gate_pass" className="w-[17rem] before:block before:h-[1px] before:w-[16rem] before:bg-white hover:text-amber-200">Gate Pass  </Link>
						<Link href="/assigments" className="w-[17rem] before:block before:h-[1px] before:w-[16rem] before:bg-white hover:text-amber-200">Assigments </Link>
					</ul>
					<ul className="flex w-3-1 ml-5">
						<Link href="/notices" className="w-[17rem] before:block before:h-[1px] before:w-[16rem] before:bg-white hover:text-amber-200">Notices</Link>
						<Link href="/hostel_mess" className="w-[17rem] before:block before:h-[1px] before:w-[16rem] before:bg-white hover:text-amber-200">Hostel/Mess</Link>
						<Link href="/scholarships" className="w-[17rem] before:block before:h-[1px] before:w-[16rem] before:bg-white hover:text-amber-200">Schoalarships</Link>
						<Link href="https://icons.tusqasi.repl.co/" className="w-[17rem] before:block before:h-[1px] before:w-[16rem] before:bg-white hover:text-amber-200">Alumini</Link>
					</ul>
				</div >
			</nav >
		</motion.div>

		<div className='flex-col justify-center items-center w-100'>
			<Image
				// className="w-[100%] "
				width={1820}
				height={2000}
				src={"/images/museum.jpeg"} alt="" className='scale-110 translate-y-9' />
		</div>



	</>);
}
export default AdmissionsPage;
