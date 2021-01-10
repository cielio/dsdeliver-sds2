import { formatPrice } from "./helpers";

type Props = {
    amount: number;
    totalPrice: number;
    OnSubmit: () => void;
}

function OrderSummary({ amount, totalPrice, OnSubmit }: Props) {
    return (
        <div className="order-summary-container">
            <div className="order-summary-content">
                <div>
                    <span className="amount-selected-container">
                        <strong className="amount-selected">{amount}</strong>
                    Peidos selecionado
                </span>
                    <span className="order-summary-total">
                        <strong className="amount-selected">R$ {formatPrice(totalPrice)}</strong>
                    VALOR TOTAL
                </span>
                </div>
                <button onClick={OnSubmit} className="order-summary-make-order">
                    FAZER PEDIDO
                </button>
            </div>
        </div>
    )
}

export default OrderSummary;