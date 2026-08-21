import Link from "next/link";

const products = [
  { label: "T-LOS", href: "/products/t-los" },
];

const company = [
  { label: "About Us", href: "/about" },
];

const support = [
  { label: "Contact", href: "/contact" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="mb-6 border-b border-white/20 pb-3 text-xl font-semibold uppercase tracking-tight text-white md:text-2xl">
        {title}
      </h2>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm uppercase text-white/70 transition-colors duration-200 hover:text-white md:text-base"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary border-t border-white/20 text-white ">
      {/* Main footer */}
      <div className="mx-auto max-w-[1600px] px-8 py-20 md:px-12 lg:px-16 lg:py-24">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:gap-12">
          {/* Brand */}
          <div className="flex flex-col justify-center">
            <Link
              href="/"
              className="text-2xl font-semibold tracking-tight text-white md:text-3xl"
            >
              BRAND
            </Link>

            

            
            {/* Social links 
            <div className="mt-8 flex gap-5">
              <Link
                href="#"
                aria-label="Instagram"
                className="text-sm uppercase text-white/60 transition-colors hover:text-white"
              >
                Instagram
              </Link>

              <Link
                href="#"
                aria-label="Facebook"
                className="text-sm uppercase text-white/60 transition-colors hover:text-white"
              >
                Facebook
              </Link>

              <Link
                href="#"
                aria-label="YouTube"
                className="text-sm uppercase text-white/60 transition-colors hover:text-white"
              >
                YouTube
              </Link>
            </div>
            */}
          </div>

          {/* Categories */}
          <FooterColumn title="Products" links={products} />

          {/* Company */}
          <FooterColumn title="Company" links={company} />

          {/* Support / Info */}
          <FooterColumn
            title="Support / Info"
            links={support}
          />
        </div>
      </div>

      {/* Legal divider */}
      <div className="mx-auto max-w-[1600px] px-8 md:px-12 lg:px-16">
        <div className="border-t border-white/15" />
      </div>

      {/* Legal */}
      <div className="mx-auto max-w-[1600px] px-8 py-8 md:px-12 lg:px-16">
        <div className="flex flex-col gap-6 text-sm text-white/60 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <span className="text-white">
              © 2026 B&R Elite Arms LLC
            </span>

            <Link
              href="#"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="transition-colors hover:text-white"
            >
              Cookie Policy
            </Link>

            <Link
              href="#"
              className="transition-colors hover:text-white"
            >
              Terms and Conditions
            </Link>

            <Link
              href="#"
              className="transition-colors hover:text-white"
            >
              Your Privacy Choices
            </Link>

            <Link
              href="#"
              className="transition-colors hover:text-white"
            >
              Notice at Collection
            </Link>
          </div>

          
        </div>
      </div>
    </footer>
  );
}