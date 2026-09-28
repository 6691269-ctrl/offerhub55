export function Header() {
  return (
    <nav>
      <div
        className="wrap"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <a href="/" className="logo">
          Offer<span>Hub</span>
        </a>
        <div style={{ fontSize: 13, color: "#667085" }}>
          Финансовые предложения
        </div>
      </div>
    </nav>
  );
}
