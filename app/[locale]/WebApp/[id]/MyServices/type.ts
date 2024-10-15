interface ServiceProps {
  service: Service
}

interface Service {
  id: string
  service: {
    id: string
    category: string
    description: string
    title: string
  }
  duration: number
  price: { currency: string; amount: number }
}

interface ParamsProps {
  id: string
}
