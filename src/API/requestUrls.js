// const globalUrl = "https://parkinglot-backend.herokuapp.com/api/v1/" //dev
const globalUrl = "http://10.222.232.147:8080/api/v1/" //test
const boyId = "1"
export default {
    "employees":globalUrl + "users",
    "parkingLots":globalUrl + "parkinglots",
    "orders":globalUrl + "orders",
    "boyOrders":globalUrl+ "orders/"+boyId,
    "parkingLotsDashboard":globalUrl+"parkinglots/dashboard",
    "parkingLotCombineSearch":globalUrl+"parkinglots/combineSearch",
    "nohandleOrders":globalUrl + "orders/nohandle",
}