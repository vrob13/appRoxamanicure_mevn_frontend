export const formatCurrency = price => {
    const formattedPrice = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price);
    return formattedPrice;
}

