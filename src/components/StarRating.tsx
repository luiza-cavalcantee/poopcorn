const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
};

const starStyle = {
  display: "flex",
  gap: "4px",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};

interface StarRatingProps {
  maxRating?: number;
}

export default function StarRating({ maxRating = 5 }: StarRatingProps) {
  return (
    <div style={containerStyle}>
      <div style={starStyle}>
        {Array.from({ length: maxRating }, (_, index) => (
          <span key={index} className={index < 4 ? "filled" : ""}>
            ★
          </span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}
