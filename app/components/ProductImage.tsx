import Image from 'next/image';

export function ProductImage() {
  return (
    <section className="p-6 pb-0 flex justify-center">
      <div className="w-full aspect-[3/4] relative group">
        <picture>
          <img
            alt="The Ultimate Guide Ebook Cover"
            className="w-full h-full object-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFKtnyv7q691aVhFgOemIcETjAauEqL4m0QmsEtikvM1crwBhUcwOrxVTDhLYlieLARGq9YasvtQ7SYUDLyTmUxq14uyRz0mJKpjMGDFyUYvA1bGl5xcglb7sP_r67naNgEopAhv0osVn_MbvJhhrlcRZw-rNhleUBh0QSsWRYeN4lstVSA2fGT_xro4capuufduAvZXBYBGeVS-f1Kqrc71eFLpd1Xy9oa2TrUVeGOESCflKdsM69GET0FTILdyWHtKxBfqLh8yQ"
          />
        </picture>
      </div>
    </section>
  );
}
