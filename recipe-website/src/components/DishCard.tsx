import styles from './DishCard.module.css';  
import { motion} from "motion/react";

interface Props {
	dishOption:string;
    selected:boolean;
    children?: any;

}

export default function DishCard({dishOption, selected, children}:Props){
    return (
       (dishOption === "meat") && selected ? (
           
            <motion.div layout className={styles.scallopred}  
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        key="meat">
                <div className="bg-beige p-1">
            <div className="border border-2 flex flex-col bg-beige border-red h-40 w-82 flex justify-center items-center">
                <h1 className="font-manrope text-4xl text-red underline underline-offset-4 ">Meat Dish</h1>
                {children}
            </div>
            </div>
            </motion.div>

          ): (dishOption === "vege") && selected ? (
            <motion.div layout className={styles.scallopgreen}
            initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        key="vege">
                <div className="bg-beige p-1">
            <div className="border border-2 border-green h-40 w-82 flex justify-center items-center">
                <h1 className="font-manrope text-4xl text-green underline underline-offset-4">Vegetarian Dish</h1>
            </div>
            </div>
            </motion.div>
          ) : (dishOption === "mix") && selected ? (
            <motion.div layout className={styles.scallopmix}
            initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        key="mix">
                <div className="bg-beige p-1">
            <div className="border border-2 border-mandarin h-40 w-82 flex justify-center items-center">
                <h1 className="font-manrope text-4xl text-mandarin underline underline-offset-4 ">Mixed Dish</h1>
            </div>
            </div>
            </motion.div>
          ) : (null)

   
    )
	
}