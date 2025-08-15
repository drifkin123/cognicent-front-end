import Section from '../../components/common/Section';

const references: string[] = [
  // TODO: Fill with actual URLs from deck footnotes
];

function References() {
  if (references.length === 0) return null;
  return (
    <Section id="references" title="References">
      <ol>
        {references.map((href, idx) => (
          <li key={idx}>
            <a href={href} target="_blank" rel="noreferrer noopener">
              {href}
            </a>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default References;


