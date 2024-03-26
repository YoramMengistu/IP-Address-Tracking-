import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import arrow from "./images/icon-arrow.svg";
import background from "./images/pattern-bg-desktop.png";
import { useEffect, useState } from "react";
import axios from "axios";
import MarkerPosition from "./components/markerPosition";

function App() {
  const [address, setAddress] = useState(null);
  const [ipAddress, setIpAddress] = useState("");

  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

  useEffect(() => {
    try {
      const getInitialData = async () => {
        const response = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_KEY}&ipAddress=8.8.8.8`
        );
        setAddress(response.data);
      };

      getInitialData();
    } catch (error) {
      console.error("Error fetching location data:", error.code, error.message);
    }
  }, []);

  const getEnteredAddress = async () => {
    await axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${
          process.env.REACT_APP_KEY
        }&${
          checkIpAddress.test(ipAddress)
            ? `ipAddress=${ipAddress}`
            : checkDomain.test(ipAddress)
            ? `domain=${ipAddress}`
            : ""
        }`
      )
      .then((res) => {
        console.log("API Response:", res.data);
        setAddress(res.data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getEnteredAddress();
    setIpAddress("");
  };
  return (
    <div>
      <section>
        <div className="absolute">
          <img className="w-full h-80 object-cover" src={background} alt="" />
        </div>
        <article className="relative p-8">
          <h1 className="text-2xl text-center lg:text-3xl font-bold mb-4 text-white ">
            IP Address Tracker
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex justify-center max-w-xl mx-auto"
          >
            <input
              type="text"
              name="ipAddress"
              id="ipAddress"
              placeholder="Search for any IP Address or Domain "
              className="py-2 px-4 rounded-l-lg l border-none outline-none"
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
            />
            <button
              type="submit"
              className="bg-black py-3 px-2  rounded-r-lg  hover:opacity-60"
            >
              <img src={arrow} alt="" />
            </button>
          </form>
        </article>

        {address && (
          <>
            <article
              className="grid grid-cols-1 max-w-4xl lg:mx-auto gap-2 md:grid-cols-2 lg:grid-cols-4 bg-white mx-auto rounded-lg text-center shadow p-8 md:text-left px-8 lg: -mb-16 relative"
              style={{ zIndex: "10000" }}
            >
              <div className="lg:border-r lg:border-slate-400">
                <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
                  Ip Address
                </h2>
                <p className="font-semibold text-slate-900 md:text-xl xl:text-3xl">
                  {address.ip}
                </p>
              </div>
              <div className="lg:border-r lg:border-slate-400">
                <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
                  Location
                </h2>
                <p className="font-semibold text-slate-900 md:text-xl xl:text-3xl">
                  {address.location.city} {address.location.region}
                </p>
              </div>

              <div className="lg:border-r lg:border-slate-400">
                <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
                  TimeZone
                </h2>
                <p className="font-semibold text-slate-900 md:text-xl xl:text-3xl">
                  UTC {address.location.timezone}
                </p>
              </div>

              <div>
                <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
                  ISP
                </h2>
                <p className="font-semibold text-slate-900 md:text-xl xl:text-3xl">
                  {address.isp}
                </p>
              </div>
            </article>
            <MapContainer
              center={[address.location.lat, address.location.lng]}
              zoom={13}
              scrollWheelZoom={true}
              style={{ height: "700px", width: "100vw" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <MarkerPosition address={address} />
            </MapContainer>
          </>
        )}
      </section>
    </div>
  );
}

export default App;
