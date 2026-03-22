// 主题配置
export const theme = {
  colors: {
    primary: "#d4af37",
    primaryLight: "#e8d5a3",
    primaryDark: "#a87b1e",
    background: "#0b0b0b",
    backgroundLight: "rgba(0,0,0,0.35)",
    cardBackground: "rgba(212, 175, 55, 0.06)",
    text: "#d4af37",
    textLight: "#f2df9f",
  },
  fonts: {
    heading: "'Cormorant Garamond', serif",
    body: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial",
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 10,
    lg: 12,
  },
};

// 样式工具函数
export const styles = {
  container: {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: theme.spacing.md,
  },
  card: {
    border: `1px solid ${theme.colors.primary}`,
    borderRadius: theme.borderRadius.md,
    background: theme.colors.cardBackground,
    padding: theme.spacing.md,
  },
  button: {
    border: `1px solid ${theme.colors.primary}`,
    borderRadius: theme.borderRadius.sm,
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    cursor: "pointer",
    fontSize: "14px",
  },
  heading: {
    background: "linear-gradient(180deg, #fff2bf 0%, #e7c86a 45%, #a87b1e 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    textShadow: "0 0 30px rgba(212,175,55,0.4), 0 4px 12px rgba(0,0,0,0.55)",
  },
};
