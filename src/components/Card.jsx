import { ImLocation } from "react-icons/im";

function Card(props) {
	return (
		<div className="card flex align-items-center">
			<img src={props.imageUrl} alt={props.title} className="card__img" />

			<div className="card__content">
				<div className="card__location flex align-items-center">
					<ImLocation />
					<span>{props.location}</span>
					<a href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer">
						View on Google Maps
					</a>
				</div>

				<h2 className="card__title">{props.title}</h2>
				<small className="card__date">{`${props.startDate} - ${props.endDate}`}</small>
				<p className="card__desc">{props.description}</p>
			</div>
		</div>
	);
}

export default Card;
