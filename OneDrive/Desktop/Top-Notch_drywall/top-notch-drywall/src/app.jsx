export default function App() {
  const services = [
    {
      title: 'New Construction ',
      desc: 'Clean, professional drywall Hanging And Finishing for homes and additions.'
    },
    {
      title: 'Drywall Repairs',
      desc: 'Patching, repairing and fixing damage to keep your walls flawless.'
    },
    {
      title: 'Texture Matching',
      desc: 'Seamless texture matching for a perfect, undetectable finish.'
    },
    {
      title: 'Water Damage Repair',
      desc: 'Quick, reliable water damage repair to restore your home.'
    },
    {
      title: 'Painting & Finishing',
      desc: 'Professional painting and finishing for a beautiful final look.'
    },
    {
      title: 'Level 5 Finishing',
      desc: 'Smooth, perfect finish for premium paint-ready surfaces.'
    }
  ]

  const projects = [
    {
      image: '/images/work1.jpg.jpg',
      title: 'Additions'
    },
    {
      image: '/images/customwall.jpg',
      title: 'Custom Shelving'
    },
    {
      image: '/images/waterdamage.jpg',
      title: 'Water Damage Reapair'
    },
    {
      image: '/images/work4.jpg',
      title: 'New Construction'
    },
    {
      image: './images/work5.jpg',
      title: 'Texture Matching'
    }
  ]

  return (
    
    <div className="min-h-screen bg-[#f7f2eb] text-black overflow-hidden">
      <img src="./images/review.jpg" alt="test" className="w-64" />
      {/* Header */}
      <header className="bg-black text-white border-b border-orange-500/30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="./images/topnotchlogooo.jpg"
              alt="The Real Top Notch Drywall"
              className="w-28"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-sm font-bold uppercase tracking-wide">
            <a href="#" className="text-orange-500 border-b-2 border-orange-500 pb-1">Home</a>
            <a href="#services" className="hover:text-orange-500 transition">Services</a>
            <a href="#projects" className="hover:text-orange-500 transition">Projects</a>
            <a href="#about" className="hover:text-orange-500 transition">About Us</a>
            <a href="#reviews" className="hover:text-orange-500 transition">Reviews</a>
            <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
          </nav>

          <div className="text-right">
            <div className="text-3xl font-black text-orange-500">309-531-6825</div>
            <div className="text-gray-300 text-sm">Bloomington-Normal, Illinois</div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-[#f7f2eb]">
        <div className="grid lg:grid-cols-2 items-stretch min-h-[700px]">
          <div className="px-8 lg:px-16 py-20 flex flex-col justify-center relative z-10">
            <div className="w-20 h-1 bg-orange-500 mb-8"></div>

            <h1 className="text-6xl lg:text-7xl font-black uppercase leading-none mb-8 tracking-tight">
              <span className="block">Quality Work.</span>
              <span className="block text-orange-500 mt-2">Top Notch Results.</span>
            </h1>

            <p className="text-2xl leading-relaxed text-gray-700 mb-10 max-w-xl">
              Over 30 years of combined experience delivering expert drywall, painting and remodeling services throughout Central Illinois.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10 text-lg font-medium">
              <div>✓ Drywall Installation</div>
              <div>✓ Water Damage Repair</div>
              <div>✓ Drywall Repairs</div>
              <div>✓ Painting & Finishing</div>
              <div>✓ Texture Matching</div>
              <div>✓ Level 5 Finishing</div>
            </div>

            <div className="flex flex-wrap gap-5">
              <a
                href="tel:3095316825"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-5 text-xl font-bold rounded-xl shadow-xl transition"
              >
                309-531-6825
              </a>

              <a
                href="#contact"
                className="border-2 border-black px-8 py-5 text-xl font-bold rounded-xl hover:bg-black hover:text-white transition"
              >
                Get A Free Estimate
              </a>
            </div>
          </div>

          <div className="relative min-h-[500px] lg:min-h-full">
            <img
              src="./images/work6.jpg"
              alt="Drywall Project"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-orange-500/15"></div>

            <div className="absolute bottom-10 right-10 bg-black text-white px-8 py-6 rounded-2xl shadow-2xl border border-orange-500/30">
              <div className="text-3xl font-black uppercase leading-tight">
                Proudly Serving
              </div>
              <div className="text-orange-500 text-3xl font-black uppercase">
                Central Illinois
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orange Strip */}
      <section className="bg-orange-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center font-bold uppercase">
          <div>
            <div className="text-4xl mb-2">30+</div>
            <div>Years Experience Combined</div>
          </div>

          <div>
            <div className="text-4xl mb-2">100%</div>
            <div>Quality Work You Can Trust</div>
          </div>

          <div>
            <div className="text-4xl mb-2">Local</div>
            <div>Central Illinois Service</div>
          </div>

          <div>
            <div className="text-4xl mb-2">On Time</div>
            <div>Professional Service</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-[#f7f2eb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black uppercase">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black text-white rounded-3xl p-10 border border-orange-500/30 shadow-2xl hover:-translate-y-2 transition"
              >
                <h3 className="text-3xl font-black text-orange-500 uppercase mb-5 leading-tight">
                  {service.title}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black uppercase">Our Recent Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#f7f2eb] rounded-2xl overflow-hidden shadow-xl border border-gray-200"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover"
                />

                <div className="bg-orange-500 text-white text-center py-4 text-lg font-bold uppercase">
                  {project.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 bg-[#f7f2eb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black uppercase">What Our Clients Say</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {['./images/review.jpg', './images/review2.jpg', './images/review3.jpg'].map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
              >
                <img
                  src={review}
                  alt="Customer Review"
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-orange-500 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-white">
            <div className="text-5xl font-black uppercase leading-tight">
              Ready To Get Started?
            </div>
            <div className="text-xl mt-2">
              Call or message us today for your free estimate!
            </div>
          </div>

          <div className="flex flex-wrap gap-5">
            <a
              href="tel:3095316825"
              className="bg-black text-white px-10 py-5 rounded-xl text-3xl font-black shadow-2xl"
            >
              309-531-6825
            </a>

            <a
              href="#"
              className="bg-white text-black px-10 py-5 rounded-xl text-2xl font-black shadow-2xl"
            >
              Get A Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-12">
          <div>
            <img
              src="./images/topnotchlogooo.jpg"
              alt="The Real Top Notch Drywall"
              className="w-40 mb-6"
            />
          </div>

          <div id="about">
            <h3 className="text-orange-500 text-2xl font-black uppercase mb-5">
              About Us
            </h3>

            <p className="text-gray-300 leading-relaxed text-lg">
              The Real Top Notch Drywall proudly serves Central Illinois with expert drywall, painting and remodeling services backed by 30+ years of combined experience.
            </p>
          </div>

          <div>
            <h3 className="text-orange-500 text-2xl font-black uppercase mb-5">
              Serving Central Illinois
            </h3>

            <ul className="space-y-3 text-gray-300 text-lg">
              <li>Bloomington, IL</li>
              <li>Normal, IL</li>
              <li>Peoria, IL</li>
              <li>Champaign, IL</li>
              <li>And Surrounding Areas</li>
            </ul>
          </div>

          <div>
            <h3 className="text-orange-500 text-2xl font-black uppercase mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-300 text-lg">
              <div>309-531-6825</div>
              <div>Bloomington,Normal, Illinois</div>
              <div>topnotchdrywall.biz@gmail.com</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500">
          © 2026 The Real Top Notch Drywall. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}
