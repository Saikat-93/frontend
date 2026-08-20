import useReveal from "../hooks/useReveal.js";

/**
 * Wraps children in a div that fades/slides into place the first time it
 * scrolls into the viewport. Use `delay` (ms) to stagger a row of items.
 *
 * <Reveal delay={80}><div className="card">...</div></Reveal>
 */
export default function Reveal({ children, delay = 0, as = "div", className = "", ...rest }) {
  const [ref, inView] = useReveal();
  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "reveal-in" : ""} ${className}`.trim()}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
