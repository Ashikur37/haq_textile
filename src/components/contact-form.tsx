import { cn } from "@/lib/utils";
import { Textarea } from "./ui/form";
import { Input } from "./ui/input";
interface ContactFormProps{
    className?:string
}
export default function ContactForm({className}:ContactFormProps) {
    return <form action="#" className={
        cn("bg-white p-5 contact-form",className)
    }>
        <div className="w-full">
            <Input type="text" placeholder="Your Name" />
        </div>
        <div className="w-full">
            <Input type="text" placeholder="Your Email" />
        </div>
        <div className="w-full">
            <Input type="text" placeholder="Subject" />
        </div>
        <div className="w-full">
            <Textarea name="" id="" cols={30} rows={7} placeholder="Message"></Textarea>
        </div>
        <div className="w-full">
            <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
        </div>
    </form>
}