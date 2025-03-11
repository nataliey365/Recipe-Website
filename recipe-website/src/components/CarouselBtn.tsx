import { useState } from "react";
interface Props {
	options: string[];
	setOption: React.Dispatch<React.SetStateAction<string>>
}

export default function CarouselBtn({options, setOption}:Props){
	const [selectedIndex, setSelectedIndex] = useState(0)


	const handlePrev = () => {
		const newIndex = selectedIndex === 0 ? options.length - 1: selectedIndex - 1;
		setSelectedIndex(newIndex)
		setOption(options[newIndex])

	}
	const handleNext = () => {
		const newIndex = selectedIndex === options.length - 1? 0: selectedIndex + 1;
		setSelectedIndex(newIndex)
		setOption(options[newIndex])

	}

	return (
		<div  className="flex m-4 w-36 p-1 justify-between font-manrope text-m border border-1 border rounded-full text-red" >
			<button className="cursor-pointer mx-1" onClick={handlePrev}>‹</button>
			<p>{options[selectedIndex]}</p>
			<button className="cursor-pointer mx-1" onClick={handleNext}>›</button>
		</div>
	)
}