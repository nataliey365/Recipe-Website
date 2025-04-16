import { useState, useEffect } from "react";
import DishOption from "./components/DishOption";
import { motion, AnimatePresence } from "motion/react";
import DishCard from "./components/DishCard";
import Submit from "./components/Submit";
import CarouselBtn from "./components/CarouselBtn";
import RecipeCardVege from "./components/RecipeCardVege";
import RecipeCardMeat from "./components/RecipeCardMeat";
import RecipeCardMix from "./components/RecipeCardMix";


function App() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [meat, setMeat] = useState(false);
  const [vege, setvege] = useState(false);
  const [mix, setmix] = useState(false);
  const proteins = ["All Proteins", "Chicken", "Beef", "Pork"]
  
  const [selectedOption, setSelectedOption] = useState(proteins[0]);
  const[recipeCardToggle, setRecipeCardToggle] = useState(false);
  const [addRecipeToggle, setAddRecipeToggle] = useState(false);

  const handleSubmit = () => {
    console.log(recipeCardToggle)
  }

  const ex = 
    {
      id: 1,
      meat:false,
      vege:true,
      mixed:false,
      name:'Vietnamese Noodle Salad',
      ingredients:["Rice Noodles", "Garlic", "Fish Sauce", "Vinegar/Lemon", "Water", "Sugar","Carrots","Cucumber", "Lettuce"],
      notes:["Best with a stir-fried meat dish or Chả giò"]
    };



  return (
    <>
      <AnimatePresence initial={false}>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 1, ease: "easeOut" },     
            }}

            exit={{ opacity: 0, scale: 1 }}
            className="flex h-screen m-0 p-0 overflow-hidden justify-center items-center"
            key="intro"
          >
            <div className="">
              <h1 className="text-8xl underline decoration-dashed underline-offset-12 p-14 text-mandarin font-playwrite ">
                What's for Dinner?
              </h1>
            </div>
          </motion.div>
        ) : (
          <div>
           
            <motion.div
              className="flex flex-col  h-screen justify-center items-center"
              initial={{ opacity: "0%" }}
              animate={{ opacity: "100%" }}
              transition={{ duration: 3, ease: "easeIn"}}
            >
 

              <div className="">
                <h1 className="text-7xl p-12 underline decoration-dashed underline-offset-14 text-mandarin font-playwrite ">
                  What's for Dinner?
                </h1>
              </div>

              <div className="mt-4">
                <motion.div
                  className=" w-full overflow-hidden whitespace-nowrap"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                >
                  <p className="text-3xl p-2 font-manrope text-brown font-light">
                    What kind of dish are we looking for today?
                  </p>
                </motion.div>
                <div className="flex flex-row justify-center">
                  <DishOption
                    dishColor="#C02105"
                    label="Meat"
                    selected={meat}
                    onClick={() => setMeat((prev) => !prev)}
                  />
                  <DishOption
                    dishColor="#528428"
                    label="Vegetable"
                    selected={vege}
                    onClick={() => setvege((prev) => !prev)}
                  />
                  <DishOption
                    dishColor="#F67C01"
                    label="Mixed"
                    selected={mix}
                    onClick={() => setmix((prev) => !prev)}
                  />
                </div>
              </div>

              <motion.div
                className="flex"
                layout
                transition={{ duration: "0.5" }}
              >
                <DishCard dishOption="Meat" selected={meat}>
                  <CarouselBtn options={proteins} setOption={setSelectedOption}></CarouselBtn>
                  </DishCard>
                <DishCard dishOption="Vegetable" selected={vege}></DishCard>
                <DishCard dishOption="Mixed" selected={mix}></DishCard>
              </motion.div>
              { meat || vege || mix ? <Submit text="Lets Get Cooking!" onClick={() => setRecipeCardToggle((prev) => !prev)}/> : null}
              
              <AnimatePresence>
              {recipeCardToggle ? (
              <motion.div
              initial={{opacity:0}}
                animate={{ opacity:1}}
                exit={{opacity:0}}
                key="bg"
              className="fixed z-1 w-full h-full bg-transp">
                <div className="flex flex-col h-full items-center justify-center">
                <button className="text-4xl border border-dashed border-3 text-mandarin px-4 pb-2 rounded-full hover:border-solid cursor-pointer" onClick={() => setRecipeCardToggle((prev) => !prev)}>x</button>
      

                <motion.div 
              initial={{opacity:0, y:700}}
              animate={{ opacity:1, y:0}}
              exit={{opacity:0,y:-700}}
              transition={{duration:0.8, type: "spring"}}
              key="recipecards"
                className="flex flex-row">
                <RecipeCardMeat recipeData={ex}></RecipeCardMeat>
                <RecipeCardVege recipeData={ex}></RecipeCardVege>
                <RecipeCardMix recipeData={ex}></RecipeCardMix>
                </motion.div>

                <Submit onClick={()=> console.log("test")} text="Regenerate"></Submit>

            </div>
            </motion.div>
            ): null
          }  
          </AnimatePresence> 
        

          {addRecipeToggle? (
            <div>

            </div>
          ):null}         
            
            </motion.div>
          </div>
          
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
