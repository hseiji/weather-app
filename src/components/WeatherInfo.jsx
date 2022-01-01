import React from 'react'
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AirIcon from '@mui/icons-material/Air';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import AcUnitIcon from '@mui/icons-material/AcUnit';


const weatherIcons = [
    {icon: AirIcon, url: ""},
    {icon: WbSunnyIcon, url: ""},
    {icon: CloudIcon, url: ""},
    {icon: AcUnitIcon, url: ""}
]

export default function WeatherInfo({direction}) {
    return (
        <div>
            <Grid container direction={direction || "row"} spacing={2}>
                {weatherIcons.map((item) => (
                    <Grid item>
                        <IconButton>
                            <item.icon/>
                        </IconButton>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
