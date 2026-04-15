import { useState } from "react"
import Header from "./components/layout/Header"
import Home from "./components/layout/Home"
import { CartCountContext } from "./context/context"
import type { CartItem } from "./types/types"

const App = () => {
	const [submittedCart, setSubmittedCart] = useState<CartItem[]>([]);

	return (
		<CartCountContext.Provider value={{ submittedCart, setSubmittedCart }}>
			<Header />
			<Home />
		</CartCountContext.Provider>
	)
}

export default App