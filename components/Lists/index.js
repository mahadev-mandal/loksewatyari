import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
const a = [1, 2, 3, 4, 5];

function SimpleList() {
    return (
        <List style={{ marginTop: 1 }} >
            {a.map((item) => (
                <ListItem key={item} alignItems="flex-start" spacing={0}>
                    <ListItemIcon style={{ minWidth: 30 }} >
                        <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <Link href="/">
                        <ListItemText
                            sx={{
                                '&:hover': {
                                    color: 'rgb(0,116,214)',
                                    textDecoration: 'underline'
                                }
                            }}
                            primary="Which is the tallest mountain in the World" />
                    </Link>
                </ListItem>
            ))
            }
        </List>
    )
}

export default SimpleList