

const localUrl = "http://localhost:8600/hotels";
const deployedUrl = "https://booking-app-eqel.onrender.com/hotels";

const hotelAllFetchData = async () => {
  try {
    const res = await fetch(localUrl, {
      headers: {
        Authoritarion:`Bearer ${'token'}`
      }
    }); 
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const hotels = await res.json();
    return hotels.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default hotelAllFetchData;