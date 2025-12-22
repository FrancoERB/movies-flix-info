const Instagram = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="igGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#F58529" />
          <stop offset="30%" stop-color="#DD2A7B" />
          <stop offset="60%" stop-color="#8134AF" />
          <stop offset="100%" stop-color="#515BD4" />
        </linearGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        stroke="url(#igGradient)"
        stroke-width="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="url(#igGradient)"
        stroke-width="2"
      />
      <circle cx="17" cy="7" r="1.2" fill="url(#igGradient)" />
    </svg>
  );
};

export default Instagram;
