export default function SocialLink({ item }) {
  const Icon = typeof item.icon === "function" ? item.icon : null;
  return (
    <a className="social-dot" href={item.href} aria-label={item.label} title={item.label}>
      {Icon ? <Icon /> : item.icon}
    </a>
  );
}
