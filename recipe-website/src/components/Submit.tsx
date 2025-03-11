interface Props {
	onClick: () => void;

}

export default function DishOption({onClick}:Props){
	return (
		<div  className="py-6 px-8 cursor-pointer font-playwrite border-mandarin text-3xl border border-3 border-dashed hover:border-solid rounded-full text-mandarin" onClick={onClick}>
            Lets Get Cooking!
		</div>
	)
}