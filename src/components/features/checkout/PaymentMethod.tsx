interface PaymentMethodProps {
  selected: string;
  onSelect: (method: string) => void;
}

export const PaymentMethod = ({ selected, onSelect }: PaymentMethodProps) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', marginTop: '10px' }}>
      <h3>Forma de Pagamento</h3>
      
      <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
        {/* Opção PIX */}
        <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <input 
            type="radio" 
            name="payment" 
            value="pix"
            checked={selected === 'pix'} 
            onChange={(e) => onSelect(e.target.value)}
          />
           <svg width="20" height="20" viewBox="0 0 24 24" fill="#00bb8f">
            <path d="M12 2 2 12l10 10 10-10L12 2Zm0 3.5L18.5 12 12 18.5 5.5 12 12 5.5Z"/>
          </svg>
          Pix
        </label>

        {/* Opção Cartão */}
        <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <input 
            type="radio" 
            name="payment" 
            value="credit"
            checked={selected === 'credit'}
            onChange={(e) => onSelect(e.target.value)}
          />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#4a4a4a">
            <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 4v8h18V9H3Zm0-2h18V7H3v2Z"/>
          </svg>
          Cartão de Crédito
        </label>

        {/* Opção Dinheiro */}
        <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <input 
            type="radio" 
            name="payment" 
            value="cash"
            checked={selected === 'cash'}
            onChange={(e) => onSelect(e.target.value)}
          />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#3aa63a">
            <path d="M2 6h20v12H2V6Zm2 2v8h16V8H4Zm10 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
          </svg>
          Dinheiro
        </label>
      </div>
    </div>
  );
};