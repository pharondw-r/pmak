export default function CTASection() {
  return (
    <section id="contact" className="w-full bg-white py-20 md:py-28 lg:py-32">
      <div className="w-full px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="font-['Playfair_Display'] text-stone-900 text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-5">
            Ready to Dive Deep or Fly Above?
          </h2>
          <p className="text-stone-500 text-sm md:text-base font-['DM_Sans'] font-light">
            WhatsApp PMAK Ocean Hub in Fujairah or Dubai
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-12 md:mb-16">
          <a
            href="https://wa.me/971581448527"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3.5 bg-stone-900 text-white rounded-full text-sm font-semibold hover:bg-stone-700 transition-colors whitespace-nowrap"
          >
            <i className="ri-whatsapp-line mr-2 text-lg" />
            WhatsApp Us
          </a>
          <a
            href="mailto:officialpmak.global@gmail.com"
            className="inline-flex items-center px-7 py-3.5 bg-transparent text-stone-900 border border-stone-300 rounded-full text-sm font-medium hover:bg-stone-50 transition-colors whitespace-nowrap"
          >
            <i className="ri-mail-line mr-2 text-lg" />
            Send Email
          </a>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto">
          <div className="bg-[#FAFAF7] rounded-2xl p-5 md:p-6 text-center">
            <div className="w-10 h-10 flex items-center justify-center mx-auto mb-3 bg-stone-100 rounded-xl">
              <i className="ri-phone-line text-stone-600" />
            </div>
            <p className="text-stone-900 text-sm font-semibold mb-1">Phone</p>
            <p className="text-stone-500 text-xs md:text-sm font-['DM_Sans']">
              +971 58 144 8527
            </p>
          </div>

          <div className="bg-[#FAFAF7] rounded-2xl p-5 md:p-6 text-center">
            <div className="w-10 h-10 flex items-center justify-center mx-auto mb-3 bg-stone-100 rounded-xl">
              <i className="ri-instagram-line text-stone-600" />
            </div>
            <p className="text-stone-900 text-sm font-semibold mb-1">Instagram</p>
            <a
              href="https://instagram.com/pmak.oceanhub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 text-xs md:text-sm font-['DM_Sans'] hover:text-stone-900 transition-colors"
            >
              @pmak.oceanhub
            </a>
          </div>

          <div className="bg-[#FAFAF7] rounded-2xl p-5 md:p-6 text-center">
            <div className="w-10 h-10 flex items-center justify-center mx-auto mb-3 bg-stone-100 rounded-xl">
              <i className="ri-map-pin-line text-stone-600" />
            </div>
            <p className="text-stone-900 text-sm font-semibold mb-1">Location</p>
            <p className="text-stone-500 text-xs md:text-sm font-['DM_Sans']">
              Fujairah, UAE &amp; Dubai
            </p>
          </div>
        </div>

        {/* Location Tags */}
        <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {["Snoopy Island", "Dibba", "3 Rocks", "Inchcape 1", "Artificial Reefs", "Dubai Marina"].map(
            (loc) => (
              <span
                key={loc}
                className="px-3 py-1.5 bg-stone-100 text-stone-600 rounded-full text-xs font-medium"
              >
                {loc}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}