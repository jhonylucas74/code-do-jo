const VET = 5.6380

class PricingService {
  async simulate (amount, sender = 'BRL', receiver = 'USD') {
    if (sender !== 'BRL' || receiver !== 'USD') {
      throw new Error(`${sender} is not a valid ISOCode`)
    }

    if (amount <=  0) {
      throw new Error(`0 is not a valid amount`)
    }

    const princing = (bank, ro) => {
      return {
        bank: {
          tax: bank,
          amount: (amount - (amount * bank)) / VET,
        },
        remessa: {
          tax: ro,
          amount: (amount - (amount * ro)) / VET,
        }
      }
    }

    if (amount < 1000) {
      return princing(0.10, 0.04)
    }

    if (amount <= 5000) {
      return princing(0.08, 0.03)
    }

    return princing(0.07, 0.03)
  }
}

export default PricingService