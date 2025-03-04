interface Props {
	dishColor:string;
	onClick: () => void;
	label:string;
	selected:boolean;

}

export default function DishOption({dishColor, onClick, label, selected}:Props){
	return (
		<button className="py-1 m-2 cursor-pointer font-manrope px-6 text-3xl border rounded-3xl" style={selected ?{ color:dishColor}:{color:"black"}} onClick={onClick}>
			{label}
		</button>
	)
}