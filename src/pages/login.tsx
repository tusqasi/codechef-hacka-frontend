import { Old_Standard_TT, Bebas_Neue, Prompt } from 'next/font/google';
import Link from 'next/link'
import { useState } from 'react';

const oldtt = Old_Standard_TT({ subsets: ['latin'], weight: ['400', '700'] });
const bebas = Bebas_Neue({
	subsets: ['latin'], weight: ['400']
});
const prompt = Prompt({
	subsets: ['latin'],
	weight: ['400']
})
const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async () => {
		try {
			const response = await fetch('https://authbase.tusqasi.repl.co/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email: email, password }),
			});

			if (response.status === 200) {
				const { scope } = await response.json();
				console.log('User scope:', scope);
				// TODO: Handle successful login
				console.log(scope)
				const [login, setLogin] = useLocalStorage<boolean>("login", email);
				setLogin(scope)
			} else {
				console.log('Invalid username or password');
				// TODO: Handle failed login
			}
		} catch (error) {
			console.error(error);
			// TODO: Handle error
		}
	};

	return (<>
		<div className="flex bg-zinc-">
			<img src="/images/house_image.png" className="w-[50%] -translate-x-20" alt="" />
			<div className="flex flex-col justify-center items-center w-full">
				<div className="flex flex-col">
					<span className={bebas.className + " text-6xl "} > Login:</span>
					<input type="text" className="      p-3 text-4xl " placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input type="password" className=" p-3 text-4xl  " placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}

					/>
					<div className='flex justify-center items-center w-full '>
						<button className={bebas.className + ' text-4xl hover:bg-sky-300 w-fit'}>Login</button>
					</div>
				</div>
			</div>
		</div >
	</>);
}
function useLocalStorage<T>(key: string, initialValue: T) {
	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useState<T>(() => {
		if (typeof window === "undefined") {
			return initialValue;
		}
		try {
			// Get from local storage by key
			const item = window.localStorage.getItem(key);
			// Parse stored json or if none return initialValue
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			// If error also return initialValue
			console.log(error);
			return initialValue;
		}
	});
	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setValue = (value: T | ((val: T) => T)) => {
		try {
			// Allow value to be a function so we have same API as useState
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;
			// Save state
			setStoredValue(valueToStore);
			// Save to local storage
			if (typeof window !== "undefined") {
				window.localStorage.setItem(key, JSON.stringify(valueToStore));
			}
		} catch (error) {
			// A more advanced implementation would handle the error case
			console.log(error);
		}
	};
	return [storedValue, setValue] as const;
}

export default LoginPage;
