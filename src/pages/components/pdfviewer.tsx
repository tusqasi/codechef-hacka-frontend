import { motion, AnimatePresence } from "framer-motion"
const Viewer = ({ url, cb }: { url: string, cb: Function }) => {
	return (
		<>

			<div className="flex h-[100px]">
				<button onClick={() => cb(false)} className="bg-cyan-200 p-2 mb-5"> Back</button>
				<iframe src={url} className='w-[1000px] h-[800px]'></iframe>
			</div>
		</>
	);
}
export default Viewer;
