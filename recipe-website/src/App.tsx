import { useState } from 'react'
import DishOption from './DishOption'

function App() {
  const [meat,setMeat] = useState(false);
  const [vege,setvege] = useState(false);
  const [mix, setmix] = useState(false);


  return (
    <>
      <div className="flex-1 flex-col justify-items-center">
        <div>
        <h1 className="text-7xl m-12 p-12 text-mandarin font-playwrite ">What's for Dinner?</h1>
        </div>
        <div>
          <p className="text-3xl p-4 font-manrope font-light">What kind of dish are we looking for today?</p>
          <div className="flex flex-row justify-center">
          <DishOption dishColor='#C02105' label="Meat" selected={meat} onClick={() => setMeat(prev => !prev)}></DishOption>
          <DishOption dishColor='#528428' label="Vegetable" selected={vege} onClick={() => setvege(prev => !prev)}></DishOption>
          <DishOption dishColor='#F67C01' label="Mixed" selected={mix} onClick={() => setmix(prev => !prev)}></DishOption>
          </div>
        </div>
        </div>
    </>
  )
}

export default App
