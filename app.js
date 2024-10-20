function generateReceipt() {
  const item1Price = Number(document.getElementById("item1Price").value);
  const item1Quantity = parseInt(
    document.getElementById("item1Quantity").value
  );
  const item2Price = Number(document.getElementById("item2Price").value);
  const item2Quantity = parseInt(
    document.getElementById("item2Quantity").value
  );
  const shippingCharges = Number(
    document.getElementById("shippingCharges").value
  );


  const totalItem1 = item1Price * item1Quantity;
  const totalItem2 = item2Price * item2Quantity;
  const totalCost = totalItem1 + totalItem2 + shippingCharges;


  const receipt = `
        <h2>Receipt</h2>
        <p>Item 1: $${item1Price} x ${item1Quantity} = $${totalItem1.toFixed(2)}</p>
        <p>Item 2: $${item2Price} x ${item2Quantity} = $${totalItem2.toFixed(2)}</p>
        <p>Shipping Charges: $${shippingCharges.toFixed(2)}</p>
        <h3>Total Cost: $${totalCost.toFixed(2)}</h3>
    `;
    let receiptGene =   document.getElementById("receipt");
    receiptGene.classList.add("display");
    receiptGene.innerHTML = receipt;
}
