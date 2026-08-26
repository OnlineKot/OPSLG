// Motyw podwójnej helisy — generowany proceduralnie jako SVG, więc nie
// wymaga żadnych plików graficznych ani sieci. Świadomie stonowany:
// cienkie linie i niski kontrast, ma budować głębię tła, a nie krzyczeć.

const RUNGS = 26;
const HEIGHT = 720;
const WIDTH = 300;
const AMPLITUDE = 92;
const TURNS = 2.35;

function strandPoints(phase: number): string {
  const steps = 160;
  const points: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const y = t * HEIGHT;
    const angle = t * Math.PI * 2 * TURNS + phase;
    const x = WIDTH / 2 + Math.sin(angle) * AMPLITUDE;
    points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return points.join(" ");
}

export function HelixGraphic() {
  const rungs = Array.from({ length: RUNGS }, (_, i) => {
    const t = i / (RUNGS - 1);
    const y = t * HEIGHT;
    const angle = t * Math.PI * 2 * TURNS;
    const x1 = WIDTH / 2 + Math.sin(angle) * AMPLITUDE;
    const x2 = WIDTH / 2 + Math.sin(angle + Math.PI) * AMPLITUDE;
    // Prążki bliżej krawędzi obrotu są "z tyłu" — niższa nieprzezroczystość
    // daje wrażenie głębi bez cieni i gradientów na każdym elemencie.
    const depth = Math.abs(Math.cos(angle));
    return { y, x1, x2, depth, key: i };
  });

  return (
    <svg
      className="helix"
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      role="img"
      aria-label="Motyw graficzny podwójnej helisy DNA"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="helix-strand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5eead4" stopOpacity="0" />
          <stop offset="22%" stopColor="#5eead4" stopOpacity="0.85" />
          <stop offset="78%" stopColor="#0d9488" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g className="helix__rungs">
        {rungs.map((rung) => (
          <line
            key={rung.key}
            x1={rung.x1}
            y1={rung.y}
            x2={rung.x2}
            y2={rung.y}
            stroke="#5eead4"
            strokeWidth={1}
            strokeOpacity={0.1 + rung.depth * 0.35}
          />
        ))}
      </g>

      <polyline points={strandPoints(0)} fill="none" stroke="url(#helix-strand)" strokeWidth={2} />
      <polyline points={strandPoints(Math.PI)} fill="none" stroke="url(#helix-strand)" strokeWidth={2} />

      <g className="helix__nodes">
        {rungs.map((rung) => (
          <g key={rung.key}>
            <circle cx={rung.x1} cy={rung.y} r={2.6} fill="#5eead4" fillOpacity={0.25 + rung.depth * 0.35} />
            <circle cx={rung.x2} cy={rung.y} r={2.6} fill="#5eead4" fillOpacity={0.25 + rung.depth * 0.35} />
          </g>
        ))}
      </g>
    </svg>
  );
}
