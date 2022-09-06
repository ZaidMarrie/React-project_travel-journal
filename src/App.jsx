import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
	console.log(window.innerWidth);
	return (
		<>
			<Header />
			<Cards />
			<Footer />
		</>
	);
}

export default App;
