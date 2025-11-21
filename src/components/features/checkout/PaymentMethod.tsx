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
          Dinheiro
        </label>
      </div>
    </div>
  );
};