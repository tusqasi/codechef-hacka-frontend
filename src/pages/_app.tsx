import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";
import TransitionEffect1 from "./components/transistion";

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<TransitionEffect1>

			<Component {...pageProps} />
		</TransitionEffect1 >
	);
};

export default MyApp;
