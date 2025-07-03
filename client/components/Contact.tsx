import emailjs from '@emailjs/browser'
import { useRef } from 'react';

function ContactForm() {

  
    const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current!,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)

    .then((result) => {
      console.log('Message envoyé !', result.text);
      alert('Message envoyé !');
    }, (error) => {
      console.error('Erreur :', error.text);
      alert('Erreur lors de l’envoi');
    });

    e.currentTarget.reset();
  };
  return (
  <section id="contact"
   className="bg-[#291C3A] text-white -mt-5 px-5 lg:py-5 py-5 mx-auto w-[89.5%] lg:w-[97.5%]">
      <h2 className="text-3xl font-bold mb-6 text-center">Contactez-moi</h2>
      <form className="flex flex-col gap-6"
      ref={form} onSubmit={sendEmail}>

        <div className="flex flex-col lg:flex-row gap-4 px-6">
          <input
            type="text"
            placeholder="Nom"
            className="flex-1 p-3 rounded-md bg-[#3b2a6e] placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8121d0]"
          />
          <input
            type="text"
            placeholder="Prénom"
            className="flex-1 p-3 rounded-md bg-[#3b2a6e] placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8121d0]"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-4 px-6">
          <input
            type="text"
            placeholder="Entreprise"
            className="flex-1 p-3 rounded-md bg-[#3b2a6e] placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8121d0]"
          />
          <input
            type="text"
            name="objet"
            placeholder="Objet de votre demande"
            className="flex-1 p-3 rounded-md bg-[#3b2a6e] placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8121d0]"
            required
          />
        </div>

        <div className="px-6">
          <textarea
            placeholder="Votre message"
            rows={5}
            className="w-full p-3 rounded-md bg-[#3b2a6e] placeholder:text-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-[#8121d0]"
          />
        </div >
        <div className="px-6">
        <button
          type="submit"
          className="w-full bg-[#8121d0] hover:bg-[#6a1db3] transition rounded-md py-3 font-bold"
        >
          Envoyer
        </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
