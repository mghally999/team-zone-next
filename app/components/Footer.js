import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="contact-info">
        <p>Our Locations:</p>
        <ul>
          <li>Palm Jumeirah, Dubai</li>
          <li>Burj Vista, Downtown, Dubai</li>
          <li>Rimal 3, JBR, Dubai</li>
        </ul>
        <p>Contact: +971 58 590 5317 | info@gmnsm.com</p>
      </div>
      <div className="social-links">
        <Link href="#">Instagram</Link> | <Link href="#">Facebook</Link>
      </div>
    </footer>
  );
}
