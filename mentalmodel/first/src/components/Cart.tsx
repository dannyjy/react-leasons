import type { CartType } from "../types/types";

const Cart = ({items}: CartType) => {
    // const [total, setTotal] = React.useState(0);
    const total = items.reduce((sum, item) => sum + item.price, 0)

    return <div>Total: {total}</div>;
}

export default Cart