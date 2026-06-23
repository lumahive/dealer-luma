import Image from "next/image";

export default function Home() {
  const whatsappLink = "https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20kendaraan%20premium%20Anda.";

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">PREMIUM MOTORS</div>
          <div>
            <a href={whatsappLink} className="btn btn-secondary">Hubungi Kami</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg">
          <img src="/images/hero.png" alt="Mobil Mewah" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Tingkatkan Pengalaman Berkendara Anda</h1>
          <p className="hero-subtitle">Temukan pilihan kendaraan mewah terbaik di Indonesia.</p>
          <a href={whatsappLink} className="btn btn-primary">Jadwalkan Kunjungan</a>
        </div>
      </section>

      <section className="collections">
        <div className="container">
          <h2 className="section-title">Koleksi <span>Kami</span></h2>
          <div className="grid-cards">
            <div className="card">
              <div className="card-img-wrapper">
                <img src="/images/suv.png" alt="SUV Premium" />
              </div>
              <div className="card-content">
                <h3 className="card-title">SUV Prestise</h3>
                <p>Kuasai jalanan dengan keanggunan dan tenaga tak tertandingi.</p>
                <a href={whatsappLink} className="btn btn-secondary" style={{padding: '8px 20px', fontSize: '1rem', color: 'var(--color-emerald)', borderColor: 'var(--color-emerald)'}}>Tanya Sekarang</a>
              </div>
            </div>
            <div className="card">
              <div className="card-img-wrapper">
                <img src="/images/ev.png" alt="EV Mewah" />
              </div>
              <div className="card-content">
                <h3 className="card-title">Visi Elektrik</h3>
                <p>Masa depan mobilitas mewah. Senyap, bertenaga, dan berkelanjutan.</p>
                <a href={whatsappLink} className="btn btn-secondary" style={{padding: '8px 20px', fontSize: '1rem', color: 'var(--color-emerald)', borderColor: 'var(--color-emerald)'}}>Tanya Sekarang</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2 className="section-title">Keunggulan <span>Premium</span></h2>
          <div className="service-grid">
            <div className="service-item">
              <div className="service-icon">💎</div>
              <h3>Pilihan Terkurasi</h3>
              <p>Setiap kendaraan di ruang pamer kami diperiksa secara cermat untuk memastikan kesempurnaan.</p>
            </div>
            <div className="service-item">
              <div className="service-icon">🤝</div>
              <h3>Layanan Eksklusif</h3>
              <p>Rasakan konsultasi personal dan pengiriman mulus langsung ke rumah Anda.</p>
            </div>
            <div className="service-item">
              <div className="service-icon">🛡️</div>
              <h3>Jaringan Terpercaya</h3>
              <p>Sebagai dealer mewah terkemuka di Indonesia, kami menjamin keaslian dan keunggulan.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="story">
        <div className="container story-flex">
          <div className="story-image">
            <img src="/images/showroom.png" alt="Ruang Pamer Dealer" />
          </div>
          <div className="story-text">
            <h2 className="section-title" style={{textAlign: 'left', marginBottom: '1.5rem'}}>Warisan <span>Kami</span></h2>
            <p>Sejak 2010, Premium Motors telah menjadi puncak keunggulan otomotif di Indonesia. Kami tidak hanya menjual mobil; kami menghadirkan gaya hidup mewah dan performa tanpa kompromi.</p>
            <p>Ruang pamer kami yang memukau dirancang untuk memberikan Anda pengalaman mendalam, memungkinkan Anda menemukan kendaraan yang melengkapi ambisi Anda dengan sempurna.</p>
            <br />
            <a href={whatsappLink} className="btn btn-primary">Kunjungi Ruang Pamer Kami</a>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Pengalaman <span>Klien</span></h2>
          <div className="grid-cards" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
            <div className="testimonial-card">
              <p className="testimonial-text">"Tingkat profesionalisme di Premium Motors tak tertandingi. Mereka menemukan model yang tepat seperti yang saya cari dalam beberapa minggu."</p>
              <p className="testimonial-author">- Budi S., Jakarta</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"Pengalaman membeli yang benar-benar mulus. Tim memahami kebutuhan saya dan memberikan lebih dari harapan saya."</p>
              <p className="testimonial-author">- Anita W., Surabaya</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"Layanan pengiriman eksklusif ke kediaman saya di Bali sangat spektakuler. Sangat direkomendasikan."</p>
              <p className="testimonial-author">- Michael T., Bali</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="logo" style={{marginBottom: '1rem'}}>PREMIUM MOTORS</div>
          <p>Jl. Jend. Sudirman Kav. 1, Jakarta, Indonesia</p>
          <p>&copy; 2026 Premium Motors Indonesia. Hak cipta dilindungi undang-undang.</p>
        </div>
      </footer>

      <a href={whatsappLink} className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.53c-1.18 0-2.34-.317-3.353-.918l-.24-.143-2.492.653.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
      </a>
    </>
  );
}
