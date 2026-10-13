import Link from "next/link";
import PageHead from "@/components/PageHead";
import PartoShowcase from "@/components/PartoShowcase";

export const metadata = {
  title: "Projeler",
  description: "MFSD'nin klinik ve dijital sağlık projeleri. PartoAI dijital partogram ve doğum karar destek sistemi.",
  alternates: { canonical: "/projeler" },
};

export default function Page() {
  return (
    <>
      <PageHead title="Projeler" crumb="Projeler" lead="Klinik ekibimizin sahada karşılaştığı sorunlardan doğan projeler. Her biri klinik doğrulamadan geçmeden kullanıma açılmaz." />
      <PartoShowcase />
      <section className="section">
        <div className="wrap cols-2">
          <div>
            <h2>Klinik doğrulama yaklaşımımız</h2>
            <p className="muted">Bir karar destek aracının güvenilirliği, uzman kararlarıyla ne kadar örtüştüğüyle ölçülür.</p>
          </div>
          <div>
            <p>PartoAI'nin eşikleri ve skorlama kuralları yayımlanmış kılavuzlara (WHO Labour Care Guide, FIGO, NICHD, Robson) dayanır ve klinik ekibimizce tek tek gözden geçirilir.</p>
            <p>Klinik kullanıma geçmeden önce sistem çıktıları, gerçek vakalarda uzman hekim kararlarıyla karşılaştırılır. Pilot uygulamalar etik ve KVKK gereklilikleri tamamlandıktan sonra başlar.</p>
            <p><Link href="/projeler/partoai">PartoAI ayrıntıları</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
