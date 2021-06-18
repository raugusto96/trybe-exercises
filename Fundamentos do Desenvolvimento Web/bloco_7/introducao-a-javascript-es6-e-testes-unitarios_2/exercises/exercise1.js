const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}.`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const ordered = Object.keys(order);
  const pizzas = Object.keys(order.order.pizza);
  const drinks = Object.values(order.order.drinks.coke);
  const priceTotal = Object.values(order.payment);
  
  ordered.name = 'Luiz Silva';
  pizzas[0] = 'muzzarella';
  pizzas[1] = 'calabresa';
  priceTotal[0] = 50;
  
  console.log(`Olá ${ordered.name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks[0]} é R$${priceTotal},00`);
  

}

orderModifier(order);