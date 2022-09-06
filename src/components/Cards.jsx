import Card from "./Card";
import journalData from "../journalData";

function Cards() {
	return (
		<main className="container">
			{journalData.map((dataEntry) => {
				return <Card key={dataEntry.id} {...dataEntry} />;
			})}
		</main>
	);
}

export default Cards;
