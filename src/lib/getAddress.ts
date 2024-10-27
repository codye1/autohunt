interface Address {
  address: {
    town: string;
    municipality: string;
    district: string;
    postcode: string;
    country: string;
    country_code: string;
  };
}

interface Place {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  class: string;
  type: string;
  place_rank: number;
  importance: number;
  addresstype: string;
  name: string;
  display_name: string;
  address: Address;
  boundingbox: [string, string, string, string];
}

const getAdress = async (input: string) => {
  if (!input) return [];

  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${input}&addressdetails=1&limit=5`,
  );
  const data = await response.json();

  return data.map((addres: Place) => ({
    title: addres.display_name,
    value: { lat: addres.lat, lon: addres.lon },
  }));
};

export default getAdress;
