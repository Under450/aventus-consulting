interface AventusLogoProps {
  className?: string;
}

export default function AventusLogo({ className = "" }: AventusLogoProps) {
  return (
    <svg
      viewBox="0 0 200 50"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g transform="translate(0, 25)">
          <circle cx="12" cy="-12" r="3.5" fill="#EF4444" />
          <circle cx="12" cy="0" r="3.5" fill="#1e293b" />
          <circle cx="12" cy="12" r="3.5" fill="#EF4444" />
          <circle cx="0" cy="0" r="3.5" fill="#1e293b" />
          <circle cx="24" cy="0" r="3.5" fill="#1e293b" />

          <line x1="12" y1="-12" x2="12" y2="0" stroke="#1e293b" strokeWidth="2" />
          <line x1="12" y1="0" x2="12" y2="12" stroke="#1e293b" strokeWidth="2" />
          <line x1="0" y1="0" x2="12" y2="0" stroke="#1e293b" strokeWidth="2" />
          <line x1="12" y1="0" x2="24" y2="0" stroke="#1e293b" strokeWidth="2" />
          <line x1="0" y1="0" x2="12" y2="-12" stroke="#EF4444" strokeWidth="2" />
          <line x1="12" y1="-12" x2="24" y2="0" stroke="#1e293b" strokeWidth="2" />
          <line x1="0" y1="0" x2="12" y2="12" stroke="#1e293b" strokeWidth="2" />
          <line x1="12" y1="12" x2="24" y2="0" stroke="#EF4444" strokeWidth="2" />
        </g>

        <text x="40" y="35" fontFamily="system-ui, -apple-system, sans-serif" fontSize="28" fontWeight="700" fill="#1e293b" letterSpacing="2">
          AV
        </text>
        <text x="82" y="35" fontFamily="system-ui, -apple-system, sans-serif" fontSize="28" fontWeight="700" fill="#1e293b" letterSpacing="2">
          <tspan fill="#EF4444">E</tspan>
        </text>
        <text x="100" y="35" fontFamily="system-ui, -apple-system, sans-serif" fontSize="28" fontWeight="700" fill="#1e293b" letterSpacing="2">
          NTUS
        </text>
      </g>
    </svg>
  );
}
