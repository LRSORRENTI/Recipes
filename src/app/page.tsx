import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
 

interface Recipe {
  title: string,
  image: string,
  time: number,
  description: string,
  vegan: boolean,
  id: string
};

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch("http://localhost:4000/recipes");
  
  // Delay response to showcase skeleton component: 
  await new Promise((resolve) => setTimeout(resolve, 1500))
  
  // With the above setTimeout, below will not return until 
  // 3 seconds, which will showcase the skeleton in the meantime
  return result.json();
};

export default async function Home() {
  const recipes = await getRecipes();

  return (
  //  <main>
  //   <div className="grid grid-cols-3 gap-8">
  //   {recipes.map(recipe => (
  //     <Card key={recipe.id} className='flex flex-col justify-between' >
  //       <CardHeader className='flex-row gap-4 items-center'>
  //         <Avatar>
  //           <AvatarImage src={`/img/${recipe.image}`} alt='Recipe Image'/>
  //           <AvatarFallback>
  //             {recipe.title.slice(0, 2)}
  //           </AvatarFallback>
  //         </Avatar>
  //         <div>
  //           <CardTitle>
  //             {recipe.title}
  //           </CardTitle>
  //           <CardDescription>
  //             {recipe.time} Mins To Cook.
  //           </CardDescription>
  //         </div>
  //       </CardHeader>
  //       <CardContent>
  //         <p>{recipe.description}</p>
  //       </CardContent>
  //       <CardFooter className='flex justify-between'>
  //         <Button>View Recipe</Button>
  //         {recipe.vegan ? 
  //         <Badge variant="secondary">Vegan</Badge> :
  //         <Badge variant="secondary">Not Vegan</Badge>}
  //       </CardFooter>
  //     </Card>
  //   ) )}
  //   </div>
  //  </main>
  <main>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
    {recipes.map(recipe => (
      <Card key={recipe.id} className='flex flex-col justify-between' >
        <CardHeader className='flex-row gap-4 items-center'>
          <Avatar>
            <AvatarImage src={`/img/${recipe.image}`} alt='Recipe Image'/>
            <AvatarFallback>
              {recipe.title.slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>
              {recipe.title}
            </CardTitle>
            <CardDescription>
              {recipe.time} Mins To Cook.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p>{recipe.description}</p>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button>View Recipe</Button>
          {recipe.vegan ? 
          <Badge variant="secondary">Vegan</Badge> :
          <Badge variant="secondary">Not Vegan</Badge>}
        </CardFooter>
      </Card>
    ))}
  </div>
</main>

  );
};
