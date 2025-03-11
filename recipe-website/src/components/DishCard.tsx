import styles from './DishCard.module.css';  
import { motion} from "motion/react";

interface Props {
	dishOption:string;
    selected:boolean;
    children?: any;

}

export default function Di({dishOption, selected, children}:Props){

    return (   
        selected ? (
            <motion.div layout className={`
                ${dishOption === "Meat" ? styles.scallopred : ''}
                ${dishOption === "Vegetable" ? styles.scallopgreen : ''}
                ${dishOption === "Mixed" ? styles.scallopmix : ''}
                `}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        key={dishOption}>
                <div className="bg-beige p-1">
            <div className="border border-2 flex flex-col bg-beige  h-40 w-82 flex justify-center items-center">
                <h1 className="font-manrope text-4xl underline underline-offset-4 ">{dishOption} Dish</h1>
                {children}
            </div>
            </div>
            </motion.div>
        ) : null
    )
}