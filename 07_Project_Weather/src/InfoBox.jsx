import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
  let Hot_URL =
    "https://tse1.mm.bing.net/th?id=OIP._6UW1704oYjKYfVcf84iMgHaEc&pid=Api&P=0&h=180";
  let Cold_URL =
    "https://tse4.mm.bing.net/th?id=OIP.NriRTUhjPs2RdtjjQt1_KwHaE7&pid=Api&P=0&h=180";
  let Rain_URL =
    "https://tse3.mm.bing.net/th?id=OIP.SCpOk-r09EEgDsEttJ3hLAHaEK&pid=Api&P=0&h=180";
  return (
    <div className="Infobox">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={
              info.humidity > 80
                ? Rain_URL
                : info.temp > 15
                ? Hot_URL
                : Cold_URL
            }
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}&nbsp;&nbsp;&nbsp;
              {
              info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 15
                ? <WbSunnyIcon/>
                : <AcUnitIcon/>
            }
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <p>Temprature : {info.temp}&deg;C</p>
              <p>Humidity : {info.humidity}&deg;C</p>
              <p>Min Temp : {info.tempMin}&deg;C</p>
              <p>Max Temp : {info.tempMin}&deg;C</p>
              <p>
                The Weather can be described as <i>{info.weather}</i> & feels
                Liks {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
