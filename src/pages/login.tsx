import { Old_Standard_TT, Bebas_Neue, Prompt } from 'next/font/google';
const oldtt = Old_Standard_TT({ subsets: ['latin'], weight: ['400', '700'] });
const bebas = Bebas_Neue({
	subsets: ['latin'], weight: ['400']
});
const prompt = Prompt({
	subsets: ['latin'],
	weight: ['400']
})
const LoginPage = () => {
	return (<>
		<div className="flex flex-cols h-[100vh] items-center content-center justify-center">
			<div className="flex flex-col justify-center items-center content-center">
				<span className={bebas.className + " text-6xl "} > Login:</span>
				<input type="text" className="border-black border p-3 text-4xl mb-1 " placeholder="Email" />
				<input type="password" className=" border border-black p-3 text-4xl  " placeholder="Password" />
				<div className='flex content-start items-start w-full'>
					<a href="forget_password">Forget Password?</a>
				</div>
			</div>
		</div >
	</>);
}
export default LoginPage;
