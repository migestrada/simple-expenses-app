export default new Array(30).fill({
  date: new Date().toLocaleDateString(),
  amount: 70000,
  type: 'income',
  account: 'Cuentas de la casa',
  description: 'Agua',
  category: 'Home',
  labels: [
    'Credito'
  ]
}).map((elem, index) => ({
  ...elem, 
  id: index + 1,
  type: index % 2 ? 'income' : 'spent',
}))