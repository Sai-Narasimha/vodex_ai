import { Box, Typography } from '@mui/material'
import React from 'react'
import downWards from '../assets/downwards.svg'
import upWards from '../assets/upword.svg'
const Card = ({ insight }) => {
    return (
        <>
            <Box display={'flex'} gap={1} border={'1px solid #374151'} borderRadius={1} p={2}>
                <img src={insight.image} alt="" />
                <Box>
                    <Box display={'flex'} gap={0.5}>
                        <Typography color="white" fontFamily={'inter'} fontSize={22}>{insight.count}</Typography>
                        <Typography color="grey" fontFamily={'inter'} mt={1} fontSize={14}>{insight.title}</Typography>
                    </Box>
                    <Box display={'flex'} alignItems={'center'} gap={0.5}>
                        <Box>
                            <img src={insight.isInc ? upWards : downWards} alt="" />
                        </Box>
                        <Typography fontFamily={'inter'} fontSize="12px" fontWeight={600} color={insight.isInc ? "green" : 'red'}> {insight.isInc ? "+" : "-"}{insight.incOrDec} </Typography>
                        <Typography fontFamily={'inter'} fontSize="12px" fontWeight={600} color={'grey'}>
                            this month
                        </Typography>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default Card