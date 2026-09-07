import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, ArrowRight, ShoppingBag } from "lucide-react";
import { digits, LOGO_SRC, type Service, type SiteSettings } from "@/lib/site-data";

type IconProps = { className?: string };

function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.52V6.76a4.85 4.85 0 0 1-1.02-.07z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21.9v-8h2.7l.4-3.1h-3.1V8.8c0-.9.25-1.5 1.55-1.5h1.65V4.5c-.3-.04-1.3-.13-2.45-.13-2.4 0-4.05 1.47-4.05 4.17v2.33H7.5v3.1h2.7v8z" />
    </svg>
  );
}

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/gmoderncreativityltd",
    Icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/gmoderncreativityltd",
    Icon: FacebookIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@gmoderncreativityltd",
    Icon: TikTokIcon,
  },
];

export function SiteFooter({
  settings,
  services,
}: {
  settings: SiteSettings;
  services: Service[];
}) {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <img
              src={LOGO_SRC}
              alt="G Modern Creativity Ltd logo"
              width={40}
              height={40}
              loading="lazy"
              className="h-10 w-10 object-cover"
            />
            <span className="font-display text-base font-semibold">G Modern Creativity Ltd</span>
          </div>
          <p className="script-accent mt-3 text-xl">{settings.tagline}</p>
          <div className="mt-5 flex items-center gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`G Modern Creativity on ${label}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-leaf hover:text-leaf"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div>
            <p className="font-medium text-foreground">Our Services</p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    className="inline-flex items-center gap-2 hover:text-foreground"
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                  >
                    <ArrowRight className="h-4 w-4 shrink-0 text-leaf" />
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link className="inline-flex items-center gap-2 hover:text-foreground" to="/shop">
                  <ShoppingBag className="h-4 w-4 shrink-0 text-leaf" />
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-foreground">Contact</p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                <a
                  className="inline-flex items-center gap-2 hover:text-foreground"
                  href={`tel:+${digits(settings.phone)}`}
                >
                  <Phone className="h-4 w-4 shrink-0 text-leaf" />
                  {settings.phone}
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-start gap-2 break-all hover:text-foreground"
                  href={`mailto:${settings.email}`}
                >
                  <Mail className="h-4 w-4 shrink-0 pt-0.5 text-leaf" />
                  {settings.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 pt-0.5 text-leaf" />
                {settings.location_text}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-border py-5 text-center text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} G Modern Creativity Ltd</span>
        <Link to="/admin" className="underline underline-offset-4 hover:text-foreground">
          Manage website
        </Link>
      </div>

    </footer>
  );
}
