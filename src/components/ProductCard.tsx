import React from "react";

interface ProductCardProps {
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  description,
  imageUrl,
}) => {
  return (
    <div style={styles.card}>
      <img src={imageUrl} alt={title} style={styles.image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>${price.toFixed(2)}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "4px solid #dddddd",
    borderRadius: "12px",
    padding: "16px",
    maxWidth: "250px",
    textAlign: "center" as const,
  },
  image: {
    width: "100%",
    height: "auto",
    marginBottom: "8px",
  },
};

export default ProductCard;
