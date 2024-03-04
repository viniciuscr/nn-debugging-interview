const orderDeliveries = require('../src/index.js');

describe("orderDeliveries' tests", () => {
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

  it('should return parcel with same origin and destination first', () => {
    const sorted = orderDeliveries(deliveriesForTheDay);
    expect(sorted[0].sameCity).toBe(true);
    expect(sorted[1].sameCity).toBe(true);
    expect(sorted[2].sameCity).toBe(false);
  });

  it('should sort by destination city', () => {
    const sorted = orderDeliveries(deliveriesForTheDay);
    expect(sorted[2].destination).toBe('Amersfoort');
    expect(sorted[3].destination).toBe('Amsterdam');
    expect(sorted[4].destination).toBe('Amsterdam');
    expect(sorted[5].destination).toBe('Amsterdam');
    expect(sorted[6].destination).toBe('Rotterdam');
  });

  it('should sort by deliveryAddress city', () => {
    const sorted = orderDeliveries(deliveriesForTheDay);
    expect(sorted[3].deliveryAddress).toBe('42 Wallaby Way');
    expect(sorted[4].deliveryAddress).toBe('42 Wallaby Way');
  });
});
