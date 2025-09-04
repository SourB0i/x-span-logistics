// React is provided via CDN in index.html
// Xspan Logistics — Concept A (Single Page)
// Built with React + Tailwind in Canvas preview
// Brand: green/yellow • Since 2001 • 21 trucks • 90 loads/week

const BRAND = {
  name: "X-span Logistics",
  primary: "#0B7A3E", // deep green
  primary600: "#0E8B49",
  accent: "#F4C430", // warm yellow
};

const DEFAULT_IMAGE = "images/mainhero1.jpg"; // fleet photo

const clients = [
  { name: "Frio Foods", logo: "images/frio-logo.png" },
  { name: "Eskort", logo: "images/eskort.jpg" },
  { name: "Molare", logo: "images/Molare-Symbol-01.png" },
  { name: "Snowlink", logo: "images/snolink.jpg" },
  { name: "Tip Top Meats", logo: "images/tiptop.jpg" },
  { name: "Etlin International (PTY) LTD", logo: "images/etlin.png" },
];

const reviews = [
  { quote: "Loads are delivered on time and as communicated.", author: "Operations Manager" },
  { quote: "Trucks neat, polished and well maintained.", author: "Food Distributor" },
  { quote: "Communication was easy and transparent.", author: "Procurement Lead" },
  { quote: "Easiest logistics company to deal with.", author: "Warehouse Supervisor" },
  { quote: "Flawless routes, efficient delivery and professional driver.", author: "Cold Store" },
];

const faqs = [
  { q: "How many trucks do you have?", a: "21 refrigerated trucks operating nationwide." },
  { q: "Do you have GIT cover?", a: "Yes — Goods in Transit cover available. Certificate provided on request." },
  { q: "How do you charge?", a: "Per-load rates agreed upfront based on pickup, drop-off and date." },
  { q: "Do you handle split loads?", a: "Yes — split-load options are available on request." },
  { q: "Do you rent refrigerated trailers?", a: "Yes — daily rates on request (availability dependent)." },
];

const fleetRange = [
  { type: "4 Tonners"},
  { type: "5 Tonners",},
  { type: "8 Tonners"},
  { type: "12 Tonners"},
  { type: "14 Tonners" },
  { type: "20 Palleters"},
  { type: "30 Palleters"},
];

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-extrabold" style={{ color: BRAND.primary }}>{value}</div>
    <div className="text-sm text-slate-600">{label}</div>
  </div>
);

const CTAButton = ({ children, className = "", href = "#quote" }) => (
  <a href={href} className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-md hover:shadow-lg transition ${className}`}>
    {children}
  </a>
);

function XspanSite() {
  const contacts = { phone: "064 471 6606", tel: "tel:+27644716606", whatsapp: "https://wa.me/27644716606" };

  return (
    <div style={{ ['--brand-yellow']: BRAND.accent }} className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="images/logo.png"
            alt="Xspan Logistics" 
            className="h-9 w-auto"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "xspan-logo.svg";
            }}
          />  
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-white/70 text-slate-800 shadow">Since 2001</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:opacity-80">About</a>
          <a href="#fleet" className="hover:opacity-80">Fleet</a>
          <a href="#customers" className="hover:opacity-80">Customers</a>
          <a href="#reviews" className="hover:opacity-80">Reviews</a>
          <a href="#faq" className="hover:opacity-80">FAQ</a>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <a href={contacts.whatsapp} target="_blank" className="px-3 py-2 rounded-xl text-sm font-semibold border border-slate-200 bg-white hover:bg-slate-50">WhatsApp</a>
          <a href={contacts.tel} className="px-3 py-2 rounded-xl text-sm bg-[var(--brand-yellow)] font-semibold text-slate-900">{contacts.phone}</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4 md:px-6 py-8 md:py-16">
          <div className="space-y-6">
            <h1 className="text-[10vw] leading-[0.95] md:text-7xl font-black tracking-tight">
              Find a reliable <span className="whitespace-nowrap">cold-chain</span>
              <br /> carrier <span className="italic" style={{ color: BRAND.accent }}>fast</span>
            </h1>
            <p className="text-slate-600 max-w-md">
              21 certified refrigerated trucks. 100+ loads a week. Food-safe handling, live tracking, and express coverage nationwide.
            </p>
            <div className="flex flex-wrap gap-3">
              <CTAButton className="bg-[var(--brand-yellow)] text-slate-900" href="#quote">Get a Cold-Chain Quote</CTAButton>
              <CTAButton className="bg-white border border-slate-200" href="#fleet">View Fleet</CTAButton>
            </div>
            <div className="text-xs text-slate-500">Solving Logistics Together</div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-white via-[#FFF8E1] to-[#F1FFF0]" />
            <img src={DEFAULT_IMAGE} alt="Xspan refrigerated trucks" className="w-full h-[420px] object-cover rounded-3xl border border-slate-200 shadow-xl" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <Stat value="2001" label="Operating since" />
              <Stat value="21" label="Refrigerated trucks" />
              <Stat value="100+/wk" label="Average loads" />
              <Stat value="-25°C" label="Temperature control" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8 md:p-10">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-3xl font-extrabold">About Xspan</h2>
              <span className="text-sm text-slate-500">Cold-chain specialists since 2001</span>
            </div>
            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              <div className="p-6 rounded-2xl border border-slate-200 bg-white/60">
                <div className="text-xl font-bold mb-2" style={{ color: BRAND.primary }}>Cold-chain specialists</div>
                <p className="text-sm text-slate-600">Refrigerated transport for food & pharma with calibrated temperature control and 24/7 dispatch.</p>
              </div>
              <div className="p-6 rounded-2xl border border-slate-200 bg-white/60">
                <div className="text-xl font-bold mb-2" style={{ color: BRAND.primary }}>100+ loads / week</div>
                <p className="text-sm text-slate-600">Rapid SLAs, proactive communication and live vehicle tracking.</p>
              </div>
              <div className="p-6 rounded-2xl border border-slate-200 bg-white/60">
                <div className="text-xl font-bold mb-2" style={{ color: BRAND.primary }}>Since 2001</div>
                <p className="text-sm text-slate-600">20+ years keeping perishables perfect from dock to door.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Range */}
      <section id="fleet" className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-10">
          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8 md:p-10">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-3xl font-extrabold">Our Fleet Range</h2>
              <span className="text-sm text-slate-500">Range from 4 Tonners to 30 Palleters</span>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {fleetRange.map((f) => (
                <div key={f.type} className="p-6 rounded-2xl border border-slate-200 bg-white text-center">
                  <div className="text-lg font-semibold" style={{ color: BRAND.primary }}>{f.type}</div>
                  {/* removed <p className="text-sm text-slate-600">...</p> */}
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>


      {/* Reviews */}
      <section id="reviews" className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8 md:p-10">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-3xl font-extrabold">What customers say</h2>
              <span className="text-sm text-slate-500">Real feedback from operations teams</span>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <p className="text-slate-700">“{r.quote}”</p>
                  <div className="mt-3 text-xs text-slate-500">— {r.author}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* FAQ (moved below Quote) */}
      <section id="faq" className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-4 md:p-6">
            <h2 className="text-3xl font-extrabold mb-6">FAQ</h2>
            <div className="divide-y rounded-2xl border border-slate-200 bg-white/70">
              {faqs.map((f, i) => (
                <details key={i} className="group p-5">
                  <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                    <span>{f.q}</span>
                    <span className="ml-4 text-slate-400 group-open:rotate-180 transition">⌄</span>
                  </summary>
                  <p className="mt-3 text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky WhatsApp */}
      <a href={contacts.whatsapp} className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-4 py-3 rounded-full shadow-lg" style={{ background: BRAND.accent }}>
        <span className="font-semibold text-slate-900">WhatsApp Us</span>
      </a>

      <footer className="mt-16 bg-slate-900 text-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3">
                <img src="images/logo.png" alt="Xspan Logistics" className="h-9 w-9 rounded-xl object-contain"  />

            <div className="flex flex-col">
            <div className="font-black tracking-tight text-lg">Xspan Logistics</div>
            <div className="text-xs font-light text-white">Solving Logistics Together</div>
              <div className="text-xs font-light text-white">---------------------------</div>
             <div className="text-xs font-light text-white">25 Witbank Road, Sundra, Delmas, 2200</div>
            </div>
            </div>
            {/* Removed footer description paragraph */}
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Company</div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#customers" className="hover:text-white">Customers</a></li>
              <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Services</div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Chilled & Frozen Transport</li>
              <li>Pharma Cold Chain</li>
              <li>Split Loads & Linehaul</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Contact</div>
            <ul className="space-y-2 text-sm">
              <li><a href={contacts.tel} className="hover:text-white">Call: 064 471 6606</a></li>
              <li><a href={contacts.whatsapp} className="hover:text-white">WhatsApp us</a></li>
              <li><a href="#quote" className="hover:text-white">Request a quote</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-slate-400">
            <div>© {new Date().getFullYear()} Xspan Logistics. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="#faq" className="hover:text-white">FAQ</a>
              <a href="#fleet" className="hover:text-white">Fleet</a>
              <a href="#quote" className="hover:text-white">Get a Quote</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

if (typeof React !== 'undefined' && typeof ReactDOM !== 'undefined') {
  const rootEl = document.getElementById('root');
  if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(<XspanSite />);
  }
}
