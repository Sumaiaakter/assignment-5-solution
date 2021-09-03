function updatedPrice(id) {
    console.log(id);
    if (id === '8gb') {
        updateSpanText('memory-cost', 0)
        // document.getElementById('memory-cost').innerText = 0;
    }
    else if (id === '16gb') {
        updateSpanText('memory-cost', 180)
        // document.getElementById('memory-cost').innerText = 180;
    }
    else if (id === '256gb') {
        updateSpanText('storage-cost', 0)
        // document.getElementById('storage-cost').innerText = 0;
    }
    else if (id === '512gb') {
        updateSpanText('storage-cost', 100)
        // document.getElementById('storage-cost').innerText = 100;
    }
    else if (id === '1tb') {
        updateSpanText('storage-cost', 180)
        // document.getElementById('storage-cost').innerText = 180;
    }
    else if (id === 'aug25') {
        updateSpanText('delivery-cost', 0)
        // document.getElementById('delivery-cost').innerText = 0;
    }
    else if (id === 'aug21') {
        updateSpanText('delivery-cost', 20)
        // document.getElementById('delivery-cost').innerText = 20;
    }
    updateSubTotal();


}
//update span price
function updateSpanText(id, price) {
    document.getElementById(id).innerText = price;
}
// get span price
function getSpanText(id) {
    const price = document.getElementById(id).innerText;
    return parseInt(price);
}
// get total price
function updateSubTotal() {
    const total = 1299 + getSpanText("memory-cost") +
        getSpanText("storage-cost") +
        getSpanText("delivery-cost");
    updateSpanText("total-cost", total)
    updateSpanText("discount-total-price", total)
}
function couponHandler() {
    const couponCode = document.getElementById("coupon-code").value;
    if (couponCode === 'stevekaku') {
        const total = getSpanText('total-cost');
        const discountTotal = total * .80;
        updateSpanText('discount-total-price', discountTotal);

    }

}