import moment from "moment";
import Currency from "react-currency-formatter";

function Order({ id, amount, amountShipping, items, timestamp, images }) {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>{" "}
          {moment.unix(timestamp).format("DD/MM/YYYY")}
        </div>
        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>
            <span className="font-bold">
              <Currency quantity={amount} currency="USD" />
            </span>{" "}
            (Including <Currency quantity={amountShipping} currency="USD" /> for
            "<span className="italic">Next Day Delivery</span>")
          </p>
        </div>
        <p className="absolute top-1 right-3 sm:static text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {items.length} items
        </p>
      </div>
    </div>
  );
}

export default Order;
