const sampleOrders = {
    daraz: [
      { orderId: 101, customerName: "Alice", amount: "$120", status: "Delivered" },
      { orderId: 102, customerName: "Bob", amount: "$85", status: "Shipped" },
      { orderId: 103, customerName: "Cathy", amount: "$150", status: "Pending" },
      { orderId: 104, customerName: "Daniel", amount: "$200", status: "Cancelled" },
      { orderId: 105, customerName: "Eva", amount: "$95", status: "Delivered" },
      { orderId: 106, customerName: "Frank", amount: "$50", status: "In Transit" },
      { orderId: 107, customerName: "Grace", amount: "$120", status: "Shipped" },
      { orderId: 108, customerName: "Hank", amount: "$300", status: "Delivered" },
      { orderId: 109, customerName: "Ivy", amount: "$130", status: "Pending" },
      { orderId: 110, customerName: "Jack", amount: "$180", status: "Delivered" },
      { orderId: 111, customerName: "Ken", amount: "$140", status: "In Transit" },
      { orderId: 112, customerName: "Lily", amount: "$160", status: "Shipped" },
      { orderId: 113, customerName: "Mia", amount: "$90", status: "Delivered" },
      { orderId: 114, customerName: "Nina", amount: "$110", status: "Cancelled" },
      { orderId: 115, customerName: "Oscar", amount: "$220", status: "Shipped" },
      { orderId: 116, customerName: "Paul", amount: "$210", status: "In Transit" },
      { orderId: 117, customerName: "Quincy", amount: "$100", status: "Delivered" },
      { orderId: 118, customerName: "Rachel", amount: "$80", status: "Pending" },
      { orderId: 119, customerName: "Sam", amount: "$75", status: "Delivered" },
      { orderId: 120, customerName: "Tom", amount: "$250", status: "Shipped" },
      { orderId: 121, customerName: "Uma", amount: "$120", status: "Delivered" },
      { orderId: 122, customerName: "Vera", amount: "$145", status: "Pending" },
      { orderId: 123, customerName: "Will", amount: "$230", status: "Cancelled" },
      { orderId: 124, customerName: "Xander", amount: "$260", status: "In Transit" },
      { orderId: 125, customerName: "Yara", amount: "$160", status: "Shipped" },
      { orderId: 126, customerName: "Zoe", amount: "$200", status: "Delivered" },
      { orderId: 127, customerName: "Ava", amount: "$95", status: "Pending" },
      { orderId: 128, customerName: "Ben", amount: "$55", status: "Delivered" },
      { orderId: 129, customerName: "Clara", amount: "$220", status: "Shipped" },
      { orderId: 130, customerName: "David", amount: "$180", status: "In Transit" }
    ],
    foodpanda: [
      { orderId: 201, customerName: "Charlie", amount: "$50", status: "Delivered" },
      { orderId: 202, customerName: "David", amount: "$25", status: "Preparing" },
      { orderId: 203, customerName: "Irene", amount: "$45", status: "Cancelled" },
      { orderId: 204, customerName: "James", amount: "$70", status: "Shipped" },
      { orderId: 205, customerName: "Kim", amount: "$30", status: "Delivered" },
      { orderId: 206, customerName: "Larry", amount: "$85", status: "Pending" },
      { orderId: 207, customerName: "Mona", amount: "$60", status: "Delivered" },
      { orderId: 208, customerName: "Nate", amount: "$90", status: "In Transit" },
      { orderId: 209, customerName: "Olivia", amount: "$110", status: "Delivered" },
      { orderId: 210, customerName: "Paul", amount: "$135", status: "Cancelled" },
      { orderId: 211, customerName: "Quincy", amount: "$100", status: "Shipped" },
      { orderId: 212, customerName: "Rachel", amount: "$65", status: "Delivered" },
      { orderId: 213, customerName: "Steve", amount: "$180", status: "Pending" },
      { orderId: 214, customerName: "Tom", amount: "$50", status: "Delivered" },
      { orderId: 215, customerName: "Uma", amount: "$70", status: "Shipped" },
      { orderId: 216, customerName: "Vera", amount: "$40", status: "Delivered" },
      { orderId: 217, customerName: "Will", amount: "$85", status: "In Transit" },
      { orderId: 218, customerName: "Xander", amount: "$95", status: "Cancelled" },
      { orderId: 219, customerName: "Yara", amount: "$75", status: "Shipped" },
      { orderId: 220, customerName: "Zoe", amount: "$110", status: "Delivered" },
      { orderId: 221, customerName: "Alex", amount: "$50", status: "Pending" },
      { orderId: 222, customerName: "Beth", amount: "$125", status: "In Transit" },
      { orderId: 223, customerName: "Carl", amount: "$135", status: "Delivered" },
      { orderId: 224, customerName: "Dana", amount: "$60", status: "Shipped" },
      { orderId: 225, customerName: "Eve", amount: "$150", status: "Cancelled" },
      { orderId: 226, customerName: "Fay", amount: "$75", status: "Delivered" },
      { orderId: 227, customerName: "Gil", amount: "$60", status: "In Transit" },
      { orderId: 228, customerName: "Holly", amount: "$90", status: "Pending" }
    ],
    amazon: [
      { orderId: 301, customerName: "Eve", amount: "$200", status: "In Transit" },
      { orderId: 302, customerName: "Frank", amount: "$150", status: "Pending" },
      { orderId: 303, customerName: "Olivia", amount: "$300", status: "Delivered" },
      { orderId: 304, customerName: "Paul", amount: "$250", status: "Cancelled" },
      { orderId: 305, customerName: "Quinn", amount: "$180", status: "Delivered" },
      { orderId: 306, customerName: "Rachel", amount: "$90", status: "Shipped" },
      { orderId: 307, customerName: "Steve", amount: "$120", status: "Delivered" },
      { orderId: 308, customerName: "Tina", amount: "$400", status: "Pending" },
      { orderId: 309, customerName: "Uma", amount: "$75", status: "Delivered" },
      { orderId: 310, customerName: "Vera", amount: "$220", status: "Shipped" },
      { orderId: 311, customerName: "Will", amount: "$150", status: "In Transit" },
      { orderId: 312, customerName: "Xander", amount: "$250", status: "Delivered" },
      { orderId: 313, customerName: "Yara", amount: "$175", status: "Cancelled" },
      { orderId: 314, customerName: "Zoe", amount: "$280", status: "Pending" },
      { orderId: 315, customerName: "Ava", amount: "$100", status: "Shipped" },
      { orderId: 316, customerName: "Ben", amount: "$160", status: "In Transit" },
      { orderId: 317, customerName: "Clara", amount: "$220", status: "Delivered" },
      { orderId: 318, customerName: "David", amount: "$180", status: "Cancelled" },
      { orderId: 319, customerName: "Emma", amount: "$90", status: "Delivered" },
      { orderId: 320, customerName: "Fred", amount: "$125", status: "Shipped" },
      { orderId: 321, customerName: "Gina", amount: "$105", status: "In Transit" },
      { orderId: 322, customerName: "Hank", amount: "$240", status: "Delivered" },
      { orderId: 323, customerName: "Ivy", amount: "$130", status: "Pending" },
      { orderId: 324, customerName: "Jack", amount: "$100", status: "Shipped" },
      { orderId: 325, customerName: "Kim", amount: "$90", status: "Delivered" }
    ]
  };
  
  export const getOrdersByCompany = (company) => {
    return sampleOrders[company] || [];
  };
  