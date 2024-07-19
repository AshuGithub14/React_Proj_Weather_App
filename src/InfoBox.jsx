import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    const INIT_URL = "https://www.indiansinkuwait.com/ShowImage.aspx?img=/Newsfile/162202152150457dustyweather.jpg&w=650";
    
    let COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT518WjXYUmdiNjmvj9qzBK9tVxpo_dTkUN_g&s";
    let HOT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIezsBj8x5CwsZFvWvotaPu84rhUGFdTUdA&s";
    let RAINY_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8rqZIyu5JPYreUz696r1FQGW4F3XLGejfeg&s";
    
    return (
        <div className="InfoBox">
            {/* <h1>WeatherInfo - {info.weather}</h1> */}
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                // image={INIT_URL}
                image={info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city} {
                    info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />
                }
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                <p>Max Temp = {info.tempMax}&deg;C</p>
                <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    );
}