import styles from './DishCard.module.css';  

interface Props {
	dishOption:string;
    selected:boolean;
}

export default function DishCard({dishOption, selected}:Props){
    return (
        (dishOption === "meat") && selected ? (
            <div className={styles.scallopred}>
                <div className="bg-beige p-1">
            <div className="border border-2 bg-beige border-red h-40 w-82 flex justify-center items-center">
                <h1 className="font-manrope text-4xl text-red underline underline-offset-4 ">Meat Dish</h1>
            </div>
            </div>
            </div>
          ): (dishOption === "vege") && selected ? (
            <div className={styles.scallopgreen}>
                <div className="bg-beige p-1">
            <div className="border border-2 border-green h-40 w-82 flex justify-center items-center">
                <h1 className="font-manrope text-4xl text-green underline underline-offset-4">Vegetarian Dish</h1>
            </div>
            </div>
            </div>
          ) : (dishOption === "mix") && selected ? (
            <div className={styles.scallopmix}>
                <div className="bg-beige p-1">
            <div className="border border-2 border-mandarin h-40 w-82 flex justify-center items-center">
                <h1 className="font-manrope text-4xl text-mandarin underline underline-offset-4 ">Mixed Dish</h1>
            </div>
            </div>
            </div>
          ) : (null)

    
    )
	
}