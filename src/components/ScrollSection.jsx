import './ScrollSection.css'

export default function ScrollSection({ children, className }) {
  return (
    <section className={`scroll-section ${className}`}>
      {children}
    </section>
  )
}