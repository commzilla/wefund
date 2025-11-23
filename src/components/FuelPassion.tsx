import heroBg from "@/assets/herobg.webp";

export const FuelPassion = () => {
  return (
    <section 
      className="relative py-32 px-4 bg-black overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative max-w-7xl mx-auto text-center z-10">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Fuel Your Passion.
          <br />
          Fund Your Potential.
        </h2>
      </div>
    </section>
  );
};
