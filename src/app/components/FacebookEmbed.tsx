export function FacebookEmbed({
  url,
}: FacebookEmbedProps) {
  const embedUrl = `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
    url
  )}&show_text=true&width=500`;

  return (
    <div className="w-full max-w-[500px] h-[650px] overflow-hidden">
      <iframe
        src={embedUrl}
        width="500"
        height="650"
        style={{
          border: "none",
          overflow: "hidden",
        }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title="Publicación de Facebook"
        className="w-full"
      />
    </div>
  );
}