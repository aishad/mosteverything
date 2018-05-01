export let items = [{
    description: "Nice boats. 50% off. wow.",
    price: 10000,
    image: "boat.png",
    sellerId: 0,
    stock:1,
    reviews:[
    {reviewerId:1, description:"I hated it"},
    {reviewerId:0, description: "10/10"},
    {reviewerId:3, description:"the worst"}
    ]
  },
  {
    description: "Lawn chairs",
    price: 50,
    image: "lawnchair.jpg",
    sellerId: 1,
    stock:10,
    reviews:[
        {reviewerId:1, description:"I loved it"},
        {reviewerId:3, desription:"it wasn't bad..."},
        {reviewerId:2, description: "the worst"}]
  }, 

  {
      description: "Vanilla cupcake",
      price: 1,
      image: "cupcake1.jpg",
      sellerId:2,
      reviews:[
          {reviewerId: 3, description: "Delicious!"},
          {reviewerId: 1, description: "10/10"},
          {reviewerId: 0, description: "yummmm"}]
  },  
  {
    description: "Rainbow cupcake",
    price: 12,
    image: "cupcake2.jpeg",
    sellerId:2,
    stock:10,
    reviews:[
        {reviewerId: 1, description: "Colorful and fun"},
        {reviewerId:0, description: "7/10"},
        {reviewerId:2, description: "tasty"}]
},
{
    description: "Chocolae cupcake",
    price: 10,
    image: "cupcake3.jpg",
    sellerId:2,
    stock:30,
    reviews:[
        {reviewerId:3, description: "chocolaty and delicious"},
        {reviewerId:2, description: "heaven"},
        {reviewerId:2, description: "super!"}]
}  
]

export let reviewers =[
{id: 0, name:"bob"},
{id:1, name:"sue"},
{id:2, name: "frequent_shopper"},
{id:3, name:"hater"}
]
