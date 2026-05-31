export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 sm:px-6 py-6 md:py-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
        <p className="text-xs sm:text-sm text-muted">
          &copy; {year} 张且 Ivy Zhang. Built with precision &amp; care.
        </p>
        <p className="text-xs sm:text-sm text-muted">
          数据洞察市场，创意引领传播。
        </p>
      </div>
    </footer>
  );
}
