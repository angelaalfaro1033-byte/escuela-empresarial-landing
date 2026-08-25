import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

interface InstagramEmbedProps {
  url: string;
}

export function InstagramEmbed({ url }: InstagramEmbedProps) {
  useEffect(() => {
    const processInstagram = () => {
      window.instgrm?.Embeds.process();
    };

    const existingScript = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]'
    );

    if (existingScript) {
      processInstagram();
      return;
    }

    const script = document.createElement("script");

    script.src = "https://www.instagram.com/embed.js";
    script.async = true;

    script.onload = processInstagram;

    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full flex justify-center">
     <blockquote
  className="instagram-media"
  data-instgrm-permalink={url}
  data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "3px",
          boxShadow:
            "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "540px",
          minWidth: "326px",
          padding: 0,
          width: "100%",
        }}
      >
        <div style={{ padding: "16px" }}>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            Ver esta publicación en Instagram
          </a>
        </div>
      </blockquote>
    </div>
  );
}