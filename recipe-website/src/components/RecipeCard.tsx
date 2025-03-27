import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import styles from './RecipeCard.module.css';

interface Props {
	dishOption:string;
    recipeData:Object;
}

export default function RecipeCard({dishOption, recipeData}:Props){

    const notesList = recipeData.notes.map((note: string | null | undefined) => <li>{note}</li>)
    const ingredientsList = recipeData.ingredients.map((ingredient:string) => <li className="float-left w-1/2 my-2">{ingredient}</li>)


    return (   

                <div className="bg-beige m-6">
            <div className="border flex flex-col rounded-3xl h-170 w-130 flex justify-center items-center" 
            style={dishOption === "Vegetable" ? { backgroundColor:'#72A944', borderColor:'#72A944'}:dishOption === "Meat" ? { backgroundColor:'#F24D30', borderColor:'#F24D30'}: dishOption === "Mixed" ? { backgroundColor:'#F67C01', borderColor:'#F67C01'}:{}}>
                <div className={`
                ${dishOption === "Vegetable" ? styles.maskgreen : dishOption === "Meat" ? styles.maskred : dishOption === "Mixed" ? styles.maskmandarin : ''}
                `}>
                    <div className="flex flex-col border-l-2 border-r-2 border-dashed mx-2 h-full py-8 px-3">
                <h1 className="font-playwrite text-center text-4xl/15 underline underline-offset-4 ">{recipeData.name}</h1>
            
                <div className="mt-4 font-manrope mx-auto px-3 text-xl border rounded-3xl" >{dishOption}</div>

                <div className="ml-10 py-2">
                <ul className="list-disc list-inside font-manrope font-light text-2xl ">{ingredientsList}</ul>
                </div>
      

                <h1 className="font-manrope text-left text-3xl underline underline-offset-4 decoration-2 pt-4">Notes</h1>
                <ul className="font-manrope text-left text-xl font-light ">{notesList}</ul>
                </div>
                </div>
            </div>
            </div>

    )
}