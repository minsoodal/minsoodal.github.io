export default function SocialLink({ item }) {
  return (
    <a className="social-dot" href={item.href} aria-label={item.label} title={item.label}>
      {item.icon}
    </a>
  );
}
