import React from "react"

interface CurrencyProp {
  currency: string
}

const TypeMoney = ({ currency }: CurrencyProp) => {
  switch (currency) {
    case "RUB":
      return <>₽</>
    case "USD":
      return <>$</>
    default:
      return null
  }
}

const Type = ({ service }: ServiceProps) => {
  if (!service || !service.service || !service.price) {
    return null
  }
  return (
    <div className="w-full py-4 relative flex flex-col">
      <div className="flex items-center justify-between w-full relative">
        <h2 className="text-[14px] font-medium">{service.service.title}</h2>
        <p className="text-moneyGreen font-light">
          {service.price.amount} <TypeMoney currency={service.price.currency} />{" "}
          / час
        </p>
      </div>
    </div>
  )
}

export default Type
