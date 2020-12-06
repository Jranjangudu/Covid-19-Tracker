import axios from "axios";
const baseURl = "https://covid19.mathdro.id/api"; // url for global covid-19 data
export const globaldata = async (country) => {
  let changeableurl = baseURl;
  // here i use condition if country having same data then the bellow code run and it change baseURl to changeableurl ; if country is empty or null then the use is same of baseURL ;
  if (country) {
    if (country === "Globally") {
      changeableurl = baseURl;
    } else { 
      changeableurl = `${baseURl}/countries/${country}`;
    }
  }
  const {
    data: { confirmed, deaths, recovered, lastUpdate },
  } = await axios.get(changeableurl);

  let results = {
    confirmed: confirmed.value,
    deaths: deaths.value,
    recovered: recovered.value,
    lastUpdate: lastUpdate,
  };
  return results;
};
// here i use all daily api / data
const countrielist = "https://covid19.mathdro.id/api/countries/";
export const allcountrie = async () => {
  const response = await axios.get(countrielist);
  return response;
};
export const fetchDailydata = async () => {
  try {
    const { data } = await axios(`${baseURl}/daily`); // here i dynamicaly change the url and set infont daily ;
    const modifiedData = data.map((dailydata) => ({
      confirmed: dailydata.confirmed.total,
      deaths: dailydata.deaths.total,
      date: dailydata.reportData,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
