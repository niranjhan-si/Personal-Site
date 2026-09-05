import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
      <ContactForm />
    </div>
  );
}
