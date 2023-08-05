"use client"
interface DescriptionProps{
    description:string;
}
export default function Description({description}:DescriptionProps){
    console.log(description);
    return  <div  dangerouslySetInnerHTML={{ __html:description }} />
}