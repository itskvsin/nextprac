const packages = [
  { title: "Beginner", price: "₹999", features: ["Basics", "Voice", "1:1 Class"] },
  { title: "Intermediate", price: "₹1999", features: ["Chords", "Rhythm", "Group Practice"] },
  { title: "Advanced", price: "₹2999", features: ["Stage Ready", "Improvisation", "Feedback"] },
];

export default function Packages() {
  return ( //
    <section className="py-12 bg-[#F5A00D]  text-black text-center">
      <h2 className="text-4xl font-bold mb-8">Packages</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 max-w-6xl mx-auto">
        {packages.map((pkg, i) => (
          <div key={i} className="bg-[#A37720] p-6 rounded-2xl border-[#F5A00D] border-1.5 shadow hover:scale-102 transition-transform">
            <h3 className="text-2xl font-semibold">{pkg.title}</h3>
            <p className="text-xl my-2">{pkg.price}</p>
            <ul className="space-y-1 text-left mt-4">
              {pkg.features.map((f, idx) => (
                <li key={idx}>✅ {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
