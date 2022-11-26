export const rupiahFormat = (num) => {
    return `Rp. ${num.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
}