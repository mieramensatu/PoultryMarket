import React from "react";

function Faq() {
  return (
    <section class="faq-section">
      <h2>Pertanyaan Umum</h2>
      <p>
        Temukan jawaban untuk pertanyaan umum tentang Makanear di bawah ini.
      </p>

      <div class="faq-search">
        <input type="text" id="faq-search" placeholder="Cari pertanyaan..." />
      </div>

      <div class="faq-items">
        <div class="faq-item">
          <h4 class="faq-question">
            Bagaimana cara menemukan restoran terdekat?
            <button class="faq-toggle">+</button>
          </h4>
          <div class="faq-answer">
            Gunakan fitur pencarian kami dengan lokasi Anda untuk menemukan
            restoran terdekat.
          </div>
        </div>

        <div class="faq-item">
          <h4 class="faq-question">
            Apakah Makanear mendukung UMKM?
            <button class="faq-toggle">+</button>
          </h4>
          <div class="faq-answer">
            Ya, kami bekerja sama dengan UMKM lokal untuk membantu mereka
            menjangkau lebih banyak pelanggan.
          </div>
        </div>

        <div class="faq-item">
          <h4 class="faq-question">
            Bagaimana cara memberikan ulasan restoran?
            <button class="faq-toggle">+</button>
          </h4>
          <div class="faq-answer">
            Anda dapat memberikan ulasan setelah mengunjungi restoran melalui
            halaman detail restoran di Makanear.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;