import React, { useEffect, useState } from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AirIcon from '@mui/icons-material/Air';
import CloudIcon from '@mui/icons-material/Cloud';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import { axiosInstance } from '../config';


// const weatherIcons = [
//     {icon: AirIcon, url: ""},
//     {icon: WbSunnyIcon, url: ""},
//     {icon: CloudIcon, url: ""},
//     {icon: AcUnitIcon, url: ""}
// ]



export default function WeatherInfo({direction, celsius}) {

    const [weather, setWeather] = useState([]);

    
    useEffect(() => {   
        const fetchData = async () => {
            try {
                // https://api.weatherapi.com/v1/current.json?key=d69b3a2318cf4f939c825004212912&q=Toronto
                const { data } = await axiosInstance.get("/current.json", { params: { key: "d69b3a2318cf4f939c825004212912", q: "Toronto"}})

                const temp_c = data.current.temp_c;
                const temp_f = data.current.temp_f;
                const feels_c = data.current.feelslike_c;
                const feels_f = data.current.feelslike_f;
                const wind_km = data.current.wind_kph;
                const wind_mph = data.current.wind_mph;
                const cloud = data.current.cloud;

                setWeather({
                    temp_c,
                    temp_f,
                    feels_c,
                    feels_f,
                    wind_km,
                    wind_mph,
                    cloud
                })

                console.log(data);
                console.log(weather);

            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])
    
    return (
        <div>
            <Grid container direction={direction || "row"} spacing={6} justifyContent='center'>
                {/* {weatherIcons.map((item) => (
                    <Grid item>
                        <IconButton>
                            <item.icon/>
                        </IconButton>
                    </Grid>
                ))} */}
                <Grid item container spacing={0}>
                    <Grid item container spacing={2}>
                        <Grid item><ThermostatIcon sx={{ fontSize: 40 }}/></Grid>
                        <Grid item>
                            {celsius? 
                                (<Typography variant='h5'>{weather.temp_c} °C</Typography>) :
                                (<Typography variant='h5'>{weather.temp_f} °F</Typography>)
                            }                       
                        </Grid>
                    </Grid>
                    <Grid item>
                        {celsius? 
                            (<Typography variant='h6'>Feels like: {weather.feels_c} °C</Typography>):
                            (<Typography variant='h6'>Feels like: {weather.feels_f} °F</Typography>)
                        }
                    </Grid>
                </Grid>

                <Grid item container spacing={2}>
                    <Grid item><AirIcon sx={{ fontSize: 40 }}/></Grid>
                    <Grid item><Typography variant='h5'>{weather.wind_km} Km/h</Typography></Grid>
                </Grid>

                <Grid item container spacing={2}>
                    <Grid item><CloudIcon sx={{ fontSize: 40 }}/></Grid>
                    <Grid item><Typography variant='h5'>{weather.cloud} % of clouds</Typography></Grid>
                </Grid>

            </Grid>
        </div>
    )
}
