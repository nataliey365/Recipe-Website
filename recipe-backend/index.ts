import { PrismaClient } from '@prisma/client';
import express from 'express';
import { RecipeType } from './generated/prisma';

const prisma = new PrismaClient();
const app = express()

app.use(express.json())

app.post('/recipe', async (req,res) => {
    const { name, recipeType, protein, notes, ingredients } = req.body
    const recipe = await prisma.recipe.create({
        data: {
            name,
            recipeType,
            protein,
            notes,
            ingredients:{
            create: [ingredients]
            }

        }

    })
    const fin = res.json(recipe)
    console.log(fin);
    
})


app.listen(3000, () =>
console.log('REST API listening'),)


