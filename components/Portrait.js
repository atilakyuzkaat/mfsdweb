// Kişi fotoğrafı (4:5). Foto yoksa baş harfleri gösterir.
// .jpg yanında aynı adla .webp varsa modern tarayıcılar onu kullanır.
export default function Portrait({ person, lang }) {
  const { photo, initials, name } = person;
  if (!photo) return <div className="portrait" aria-hidden="true">{initials}</div>;
  const webp = photo.replace(/\.(jpe?g|png)$/i, ".webp");
  return (
    <div className="portrait">
      <picture>
        <source srcSet={webp} type="image/webp" />
        <img src={photo} alt={name[lang]} width="640" height="800" loading="lazy" decoding="async" />
      </picture>
    </div>
  );
}
