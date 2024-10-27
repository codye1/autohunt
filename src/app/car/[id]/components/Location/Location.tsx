interface ILocation {
  address: string;
  lat: string;
  lon: string;
}

const Location = ({ lat, lon, address }: ILocation) => {
  return (
    <section>
      <h1>Location</h1>
      <h2>{address}</h2>
      <iframe
        width="100%"
        height="300"
        src={`https://api.maptiler.com/maps/streets-v2/?key=XyT8E9T7XeDwpsq9fbbX#13.1/${lat}/${lon}`}
      ></iframe>
    </section>
  );
};

export default Location;
