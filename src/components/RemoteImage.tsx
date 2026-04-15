type RemoteImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function RemoteImage({ src, alt, className }: RemoteImageProps) {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
}
