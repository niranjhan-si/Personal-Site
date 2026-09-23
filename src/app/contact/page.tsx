import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Niranjhan Sivakumar.",
};

export default function Contact() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
      <p className="max-w-2xl text-black/70 dark:text-white/70">
        I&apos;d love to hear from you. Whether it&apos;s a product question, something
        you&apos;re building, or an opportunity, send me a note and I&apos;ll get back to you
        soon.
      </p>
      <ContactForm />
      <p className="text-sm text-black/50 dark:text-white/50">
        Or reach me directly at{" "}
        <a href="mailto:niranjhan.si@gmail.com" className="hover:underline">
          niranjhan.si@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
