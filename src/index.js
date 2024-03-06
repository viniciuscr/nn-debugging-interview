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
    .sort((a, b) =>
      a.deliveryAddress < b.deliveryAddress
        ? 1
        : a.deliveryAddress > b.deliveryAddress
        ? -1
        : 0,
    );

  return [
    ...sorted.filter((delivery) => delivery.sameCity),
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
  deliveries.map((delivery) =>
    delivery.origin === delivery.destination
      ? { ...delivery, sameCity: true }
      : delivery,
  );

const orderDeliveries = (deliveries) =>
  parcelSortingSystem(markSameCityDeliveries(deliveries));

module.exports = orderDeliveries;
