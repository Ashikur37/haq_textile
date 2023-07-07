import BreadCumb from "@/components/bread-cumb";
import ContactForm from "@/components/contact-form";
import GoogleMap from "@/components/google-map";

export default function Contact() {
    return <div>
        <BreadCumb title="CONTACT US" links={[
            {
                label: "HOME",
                url: "/"
            },
            {
                label: "CONTACT",
                url: "/contact"
            }
        ]} />
        <div className="container flex">
            <GoogleMap className="w-1/2"/>
            <ContactForm className="w-1/2"/>
        </div>
    </div>
}