import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import styles from './RecipeCard.module.css';

interface Props {
    recipeData:Object;
}

export default function RecipeCardMeat({recipeData}:Props){

    const notesList = recipeData.notes.map((note: string | null | undefined) => <li>{note}</li>)
    const ingredientsList = recipeData.ingredients.map((ingredient:string) => <li className="float-left w-1/2 my-2">{ingredient}</li>)


    return (   

                <div className="bg-beige m-6">
            <div className="border flex flex-col rounded-3xl h-170 w-130 flex border-red bg-red justify-center items-center">
                <div className={styles.maskred}>
                    <div className="flex flex-col border-l-2 border-r-2 justify-around border-lightred border-dashed mx-2 h-full py-12 px-3">
                <h1 className="font-playwrite text-center text-4xl/15 underline underline-offset-4 ">{recipeData.name}</h1>
            
                <div className="mt-4 font-manrope mx-auto px-3 text-xl border rounded-3xl" >Meat</div>

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