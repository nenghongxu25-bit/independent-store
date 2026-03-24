// src/components/Navbar/MenuStyles.ts
export const megaMenuStyles: React.CSSProperties = {
  position: 'fixed', top: '70px', left: 0, width: '100vw', backgroundColor: '#fff', 
  zIndex: 999, display: 'flex', justifyContent: 'center', padding: '40px 0', 
  color: '#1a0525', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
};

export const containerStyles: React.CSSProperties = { display: 'flex', width: '100%', maxWidth: '1200px', gap: '40px' };
export const headerStyles: React.CSSProperties = { fontSize: '0.85rem', marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '8px', fontWeight: 'bold' };
export const listStyles: React.CSSProperties = { listStyle: 'none', padding: 0, lineHeight: '2', fontSize: '0.75rem', cursor: 'pointer' };
export const cardStyles: React.CSSProperties = { backgroundColor: '#f9f7f5', padding: '25px', borderRadius: '4px', flex: 1.2 };
