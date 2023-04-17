import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link'
import { motion, stagger } from "framer-motion";




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
			<nav className="flex bg-black text-slate-50 text-6xl text-serif h-[2em] w-[150%] justify-start items-center -translate-x-[3%]">
				<motion.div className={oldtt.className + " font-normal ml-[4%] "} animate={{y:[-100,0]}}>SGGSIE&T</motion.div >
				<motion.div className={bebas.className + ' text-2xl '} animate={{x:[100,0]}}>
					<ul className='flex w-30 ml-5 '>
						<Link href="/admissions" className="w-[17rem] before:block before:h-[1px] before:w-[16rem] before:bg-white hover:text-amber-200">Admissions </Link>
						<Link href="/results" className="w-[17rem] before:block before:h-[1px] before:w-[16rem] before:bg-white hover:text-amber-200">Result</Link>
						<Link href="/gate_pass" className="w-[17rem] before:block before:h-[1px] before:w-[16rem] before:bg-white hover:text-amber-200">Gate Pass  </Link>
						<Link href="/assigments" className="w-[17rem] before:block before:h-[1px] before:w-[16rem] before:bg-white hover:text-amber-200">Assigments </Link>
					</ul>
					<ul className="flex w-3-1 ml-5  ">
						<Link href="/notices" className="w-[17rem] before:block before:h-[1px] before:w-[16rem] before:bg-white hover:text-amber-200">Notices</Link>
						<Link href="/hostel_mess" className="w-[17rem] before:block before:h-[1px] before:w-[16rem] before:bg-white hover:text-amber-200">Hostel/Mess</Link>
						<Link href="/scholarships" className="w-[17rem] before:block before:h-[1px] before:w-[16rem] before:bg-white hover:text-amber-200">Schoalarships</Link>
						<Link href="https://icons.tusqasi.repl.co/" className="w-[17rem] before:block before:h-[1px] before:w-[16rem] before:bg-white hover:text-amber-200">Alumini</Link>
					</ul>
				</motion.div >
			</nav >
		</motion.div>

		<div className='flex-col justify-center items-center mt-3 '>
			<motion.div className='z-10 absolute flex flex-col w-fit h-100 ' animate={{x:[-20,20]}}  initial={{x:-10}} transition={{staggerChildren: 1, }}  >
				<motion.span className={bebas.className + ' bg-white text-7xl m-1'}>
						Breathtaking 
				</motion.span>
				<motion.span className={bebas.className + ' bg-white w-fit text-7xl m-1 '}>
						Campus
				</motion.span>
			</motion.div>
			<motion.div animate={{y:[-100,0]}}>
			<Image
				// className="w-[100%] "
				width={1820}
				height={2000}
				src={"/images/museum.jpeg"} alt="" className='scale-110 ' />
			</motion.div>
		</div>


	</>);
}
export default AdmissionsPage;
