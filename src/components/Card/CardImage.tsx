interface Props {
	imageURL: string;
	name: string;
}

export const CardImage = ({ imageURL, name }: Props) => {
	return (
		<img src={imageURL} alt={name} className="rounded-lg" />
	)
}
