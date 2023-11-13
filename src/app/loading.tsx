import SkeletonCard from "@/components/SkeletonCard";

export default function loading() {
  return (
    <main>
    <div className="grid grid-cols-3 gap-8">
      {"abcdefghi".split('').map(i => (
        // This is a cheap way to iterate over 
        // something nine times, we just split the 
        // string of 9 chars and map so we can 
        // render nine skeleton cards in a grid 
        // which mimics the exact layout we render 
        // in the page.tsx component
        <SkeletonCard key={i}/>
      ))}
    </div>
    </main>
  )
}
