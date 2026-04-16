type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-3 sm:mt-4">{title}</h2>
      <p className="section-copy mt-4 sm:mt-5">{description}</p>
    </div>
  );
}
