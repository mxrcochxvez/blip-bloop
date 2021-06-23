import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { FaDiscord } from 'react-icons/fa';

export default function Home() {
    const matches = useMediaQuery('(min-width:600px)');

    const DiscordButton = () => {
        return (
            <Button size='large' variant='contained' style={{ marginTop: '1rem', backgroundColor: '#7289DA' }}>
                <FaDiscord color='white' />
                <Typography component='a' href='https://discord.gg/caCBvyyj' style={{ marginLeft: '4px', color: 'white', textTransform: 'none' }}>Join Our Discord!</Typography>
            </Button>
        )
    }

    const largeDevice = () => {
        return (
            <Grid
                container
                justify='center'
                alignItems='center'
                direction='column'
                style={{ minHeight: '100vh' }}
            >
                <Typography variant='h1' align='center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '1rem', borderRadius: '10px' }}>Blip Bloop Gaming Group</Typography>
                {DiscordButton()}
            </Grid>
        )
    }

    const smallDevice = () => {
        return (
            <Grid
                container
                justify='center'
                alignItems='center'
                direction='column'
                style={{ minHeight: '80vh' }}
            >
                <Typography variant='h3' align='center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '1rem', borderRadius: '10px' }}>Blip Bloop Gaming Group</Typography>
                {DiscordButton()}
            </Grid>
        )
    }

    return (
        matches ? largeDevice() : smallDevice()
    )
}
