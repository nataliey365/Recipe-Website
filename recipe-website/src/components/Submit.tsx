interface Props {
	onClick: () => void;
	text: string;
}

export default function DishOption({onClick, text}:Props){
	return (
		<div  className="py-6 px-8 bg-beige cursor-pointer font-playwrite border-mandarin text-3xl border border-3 border-dashed hover:border-solid rounded-full text-mandarin" onClick={onClick}>
            {text}
		</div>
	)
}