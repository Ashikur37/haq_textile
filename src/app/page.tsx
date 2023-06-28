import Button from "@/Button";

export default async function Home() {
  const time=new Date().toLocaleTimeString();

  return (
   <>
   {time}
   <br/>
    <Button/>
   </>
  )
}
