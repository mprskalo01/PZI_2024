const cars = [
  {
    id: 1,
    name: 'Mercedes e220d',
    brand: 'Mercedes',
    transmission: 'Automatic',
    pricePerDay: 30,
    yearModel: 2017,
    seatCapacity: 5,

    fuelType: 'Diesel',
    images: [
      'https://imgd.aeplcdn.com/664x374/cw/specialVersions/5330.jpg?v=20170605011006&q=75',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/22875/e-class-exterior-right-side-view.jpeg?q=75',
      'https://imgd.aeplcdn.com/370x208/n/cw/ec/22875/e-class-interior-steering-wheel.jpeg?q=75',
      'https://imgd.aeplcdn.com/370x208/n/cw/ec/22875/e-class-interior-rear-seats.jpeg?q=75',
    ],
  },
  {
    id: 2,
    name: 'BMW 330i sport',
    brand: 'BMW',
    transmission: 'Automatic',
    pricePerDay: 100,
    yearModel: 2021,
    seatCapacity: 5,

    fuelType: 'Petrol',
    images: [
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/37067/3-series-exterior-right-front-three-quarter-2.jpeg?q=75',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/37067/3-series-exterior-right-side-view.jpeg?q=75',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/37067/3-series-exterior-right-rear-three-quarter-2.jpeg?q=75',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/37067/3-series-exterior-left-side-view-2.jpeg?q=75',
    ],
  },
  {
    id: 3,
    name: 'VolksWagen Comfortline 1.0 TSI MT',
    brand: 'VolksWagen',
    transmission: 'Manual',
    pricePerDay: 80,
    yearModel: 2022,
    seatCapacity: 5,

    fuelType: 'Petrol',
    images: [
      'https://imgd.aeplcdn.com/1056x594/n/cw/ec/101055/virtus-exterior-front-view.jpeg?isig=0&q=75&wm=1',
      'https://imgd.aeplcdn.com/1056x594/n/cw/ec/101055/virtus-exterior-rear-view-2.jpeg?isig=0&q=75&wm=1',
      'https://imgd.aeplcdn.com/1056x594/n/cw/ec/101055/virtus-exterior-left-side-view.jpeg?isig=0&q=75&wm=1',
      'https://imgd.aeplcdn.com/1056x594/n/cw/ec/101055/virtus-interior-dashboard-2.jpeg?isig=0&q=75&wm=1',
    ],
  },
  {
    id: 4,
    name: 'Audi A7 3.0T',
    brand: 'Audi',
    transmission: 'Automatic',
    pricePerDay: 200,
    yearModel: 2022,
    seatCapacity: 5,

    fuelType: 'Petrol',
    images: [
      'https://carwow-uk-wp-3.imgix.net/2018-audi-a7-review-21.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=750',
      'https://carwow-uk-wp-3.imgix.net/2018-audi-a7-review-22.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=750',
      'https://carwow-uk-wp-3.imgix.net/2018-audi-a7-review-13.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=750',
      'https://carwow-uk-wp-3.imgix.net/2018-audi-a7-review-18.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=750',
    ],
  },
  {
    id: 5,
    name: 'Mercedes-Benz CLS 350',
    brand: 'Mercedes',
    transmission: 'Automatic',
    pricePerDay: 100,
    yearModel: 2017,
    seatCapacity: 5,

    fuelType: 'Diesel',
    images: [
      'https://prod.pictures.autoscout24.net/listing-images/8ee4455b-5721-4709-b126-e01228096fc2_cc2b198b-a37b-4f8d-8bd7-70e600ec6754.jpg/720x540.webp',
      'https://prod.pictures.autoscout24.net/listing-images/8ee4455b-5721-4709-b126-e01228096fc2_523a35ee-553d-49e0-b447-82cd70386f80.jpg/720x540.webp',
      'https://prod.pictures.autoscout24.net/listing-images/8ee4455b-5721-4709-b126-e01228096fc2_5757a1bc-d31b-4fbf-ab9c-4611b53affb3.jpg/720x540.webp',
      'https://prod.pictures.autoscout24.net/listing-images/8ee4455b-5721-4709-b126-e01228096fc2_d1857807-e5ba-4c91-bad9-176b89c8abc6.jpg/720x540.webp',
    ],
  },
  {
    id: 6,
    name: 'Porsche 911 Turbo S',
    brand: 'Porsche',
    transmission: 'Automatic',
    pricePerDay: 5000,
    yearModel: 2022,
    seatCapacity: 4,

    fuelType: 'Petrol',
    images: [
      'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8mv60KwChQ58DRgfNk320DyICcT89qwfIjMa7DrxACO8uJWRaVWCAxFH2OEe8VP3TexLeuqXWIJgFgf%25oWjrHwo0nq8J',
      'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9A7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8mv60KwChQ58DRgfNk320DyICcT89qwfIjMa7DrxACO8uJWRaVWCAxFH2OEe8VP3TexLeuqXWIJgFgf%25oWjrHwo0nq8J',
      'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9L7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8mv60KwChQ58DRgfNk320DyICcT89qwfIjMa7DrxACO8uJWRaVWCAxFH2OEe8VP3TexLeuqXWIJgFgf%25oWjrHwo0nq8J',
      'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbIwNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8mv60KwChQ58DRgfNk320DyICcT89qwfIjMa7DrxACO8uJWRaVWCAxFH2OEe8VP3TexLeuqXWIJgFgf%25oWjrHwo0nq8J',
    ],
  },
]

export default cars
