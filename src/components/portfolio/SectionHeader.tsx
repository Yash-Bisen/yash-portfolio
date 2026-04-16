type Props = {
  code: string;
  title: string;
  subtitle?: string;
};

export function SectionHeader({ code, title, subtitle }: Props) {
  return (
    <div className="flex flex-col gap-4 mb-12">
      <div className="flex items-center gap-4">
        <div className="w-8 h-px bg-ink" />
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-subtle">
          {code}
        </span>
      </div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter uppercase text-balance">
        {title}
        <span className="text-laser">.</span>
      </h2>
      {subtitle && (
        <p className="text-ink-subtle text-base lg:text-lg max-w-2xl text-pretty">
          {subtitle}
        </p>
      )}
    </div>
  );
}
