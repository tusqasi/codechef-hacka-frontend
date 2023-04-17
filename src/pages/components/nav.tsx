import { Old_Standard_TT, Bebas_Neue, Prompt } from 'next/font/google';
const oldtt = Old_Standard_TT({ subsets: ['latin'], weight: ['400', '700'] });
const bebas = Bebas_Neue({
	subsets: ['latin'], weight: ['400']
});
const prompt = Prompt({
	subsets: ['latin'],
	weight: ['400']
})
function Nav() {
	return (
		<nav className="flex bg-black text-slate-50 text-5xl text-serif h-[2em] w-[130%] justify-start items-center -translate-x-[6%]">
			<div className={oldtt.className + " font-normal lg:ml-[10rem]  ml-[5rem]"}>SGGSIE&T</div>
		</nav>);
}
export default Nav;
