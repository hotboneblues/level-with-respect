/* Renders approved resident-submitted photos and video. */
export function MediaGallery({ urls }: { urls: string[] | null }) {
  if (!urls?.length) return null;
  return (
    <div className="mt-4 grid grid-cols-2 gap-3">
      {urls.map((url) =>
        /\.(mp4|mov|webm)(\?|$)/i.test(url) ? (
          <video
            key={url}
            src={url}
            controls
            preload="metadata"
            className="aspect-video w-full rounded-lg border border-line bg-sand object-cover"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={url}
            src={url}
            alt="Resident-submitted documentation"
            loading="lazy"
            className="aspect-video w-full rounded-lg border border-line bg-sand object-cover"
          />
        )
      )}
    </div>
  );
}
