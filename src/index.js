/**
 * Sorts the deliveries for the day first by delivery address and then by destination,
 * and put on top all the deliveries with the same origin and destination.
 *
 * @param {array} deliveriesForTheDay - the list of deliveries for the day
 * @return {array} the sorted and filtered list of deliveries
 */
const parcelSortingSystem = (deliveriesForTheDay) => {
  const sorted = deliveriesForTheDay
    .sort((a, b) => a.destination.localeCompare(b.destination))
    // FIX: invert sorts, first by deliveryAddress then by destination
    .sort(
      // FIX: invert sorts. so '1' => '-1' and '-1' => '1', also it could be replaced by localeCompare
      (a, b) =>
        a.deliveryAddress < b.deliveryAddress
          ? 1
          : a.deliveryAddress > b.deliveryAddress
          ? -1
          : 0,
    );

  return [
    ...sorted.filter((delivery) => delivery.sameCity),
    // FIX: remove '!' or remove '=== false'
    ...sorted.filter((delivery) => !delivery.sameCity === false),
  ];
};

/**
 * Maps the deliveries array and marks the deliveries with the same origin and destination as sameCity.
 *
 * @param {Array} deliveries - The array of deliveries to be processed.
 * @return {Array} The modified array of deliveries with sameCity marked.
 */
const markSameCityDeliveries = (deliveries) =>
  deliveries.map(
    // FIX: change else 'delivery' => '{ ...delivery, sameCity: false }'
    (delivery) =>
      delivery.origin === delivery.destination
        ? { ...delivery, sameCity: true }
        : delivery,
  );

const orderDeliveries = (deliveries) =>
  parcelSortingSystem(markSameCityDeliveries(deliveries));

/*

In case of struggle with test we can offer a option to print the result 

 const deliveriesForTheDay = [
  { deliveryAddress: '42 Wallaby Way', origin: 'Amsterdam', destination: 'Amsterdam' },
  { deliveryAddress: '531 Elm St', origin: 'Rotterdam', destination: 'Amsterdam' },
  { deliveryAddress: '947 Oak St', origin: 'Amsterdam', destination: 'Rotterdam' },
  { deliveryAddress: '124 Pine St', origin: 'Utrecht', destination: 'Amersfoort' },
  { deliveryAddress: '622 Maple St', origin: 'Amersfoort', destination: 'Utrecht' },
  { deliveryAddress: '42 Wallaby Way', origin: 'Rotterdam', destination: 'Amsterdam' },
  { deliveryAddress: '42 Wallaby Way', origin: 'Utrecht', destination: 'Amsterdam' },
  { deliveryAddress: '123 Main St', origin: 'Rotterdam', destination: 'Rotterdam' },
  { deliveryAddress: '123 Main St', origin: 'Amersfoort', destination: 'Rotterdam' },
];

console.table(orderDeliveries(deliveriesForTheDay)); 
*/

module.exports = orderDeliveries;
