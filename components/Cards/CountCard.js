import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

export default function CountCard() {
    return (
        <Card sx={{ minWidth: 200 }}>
            <CardContent>
                <Stack direction="row" justifyContent="space-between">
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Questions
                    </Typography>
                    <HelpIcon sx={{ fontSize: 40, color: 'rgb(25,139,223)' }} />
                </Stack>
                <Typography variant="h5" component="div" sx={{ mt: 2 }}>
                    1600
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}