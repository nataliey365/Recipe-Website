import { useState, useEffect } from "react";
import DishOption from "./components/DishOption";
import { motion, AnimatePresence } from "motion/react";
import DishCard from "./components/DishCard";
import Submit from "./components/Submit";
import { MultiSelect } from "react-multi-select-component";
import CarouselBtn from "./components/CarouselBtn";


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
                <DishCard dishOption="meat" selected={meat}>
                  <CarouselBtn options={proteins} setOption={setSelectedOption}></CarouselBtn>

                  </DishCard>
                <DishCard dishOption="vege" selected={vege}></DishCard>
                <DishCard dishOption="mix" selected={mix}></DishCard>
              </motion.div>
              { meat || vege || mix ? <Submit onClick={() => console.log(selectedOption)}/> : null}
            </motion.div>



      
          </div>
          
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
