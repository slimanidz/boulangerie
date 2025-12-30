import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />

      <div className="px-8 py-6">
        <h2 className="text-3xl font-bold mb-4">Contact & Localisation</h2>

        <p>Email : contact@delicedelena.com</p>
        <p>Téléphone : 06 12 34 56 78</p>
        <p>Adresse : 12 Rue du Pain Chaud, Paris</p>

        <div className="mt-6">
          <iframe
            className="w-full h-72 rounded-xl shadow-lg"
            src="https://maps.google.com/maps?q=paris&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
}
