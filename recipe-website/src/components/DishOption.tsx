interface Props {
	dishColor:string;
	onClick: () => void;
	label:string;
	selected:boolean;

}

export default function DishOption({dishColor, onClick, label, selected}:Props){
	return (
		<div className="py-1 m-2 cursor-pointer font-manrope px-6 border-brown text-3xl border rounded-3xl hover:" style={selected ? { color:dishColor, borderColor:dishColor}:{color:"#874503"}} onClick={onClick}>
			{label}
		</div>
	)
}