import { Card, CardContent, CardHeader, CardFooter } from './ui/card'
import { Skeleton } from './ui/skeleton'

function SkeletonCard() {
  return (
    <Card className='flex flex-col justify-between' >
    <CardHeader className='flex-row gap-4 items-center'>
      <Skeleton className='w-12 h-12 rounded-full'/>
      <Skeleton className='h-6 flex-grow'/>
    </CardHeader>
    <CardContent>
     <Skeleton  className='h-4 flex-grow mt-4'/>
     <Skeleton  className='h-4 flex-grow mt-4'/>
     {/* The skeleton above is for a full line of 
     text, below is for a half line of text */}
     <Skeleton  className='h-4 w-1/2 mt-4'/>
    </CardContent>
    <CardFooter >
        {/* The below skeleton is mean't to look like 
        the shape of a button */}
     <Skeleton className='h-10 w28'/>
    </CardFooter>
  </Card>
  )
}

export default SkeletonCard
