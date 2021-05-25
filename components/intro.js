export default function Intro({ title, subtitle }) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
