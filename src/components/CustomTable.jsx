import { Box, Typography } from '@mui/material';
import React from 'react';

const CustomTable = ({ tableData }) => {
    return (
        <Box>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid rgba(55, 65, 81, 1)', backgroundColor: 'rgba(55, 65, 81, 1)', color: 'rgba(156, 163, 175, 1)' }}>NAME</th>
                        <th style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid rgba(55, 65, 81, 1)', backgroundColor: 'rgba(55, 65, 81, 1)', color: 'rgba(156, 163, 175, 1)' }}>STATUS</th>
                        <th style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid rgba(55, 65, 81, 1)', backgroundColor: 'rgba(55, 65, 81, 1)', color: 'rgba(156, 163, 175, 1)' }}>EMAIL</th>
                        <th style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid rgba(55, 65, 81, 1)', backgroundColor: 'rgba(55, 65, 81, 1)', color: 'rgba(156, 163, 175, 1)' }}>CREATED TIME</th>
                        <th style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid rgba(55, 65, 81, 1)', backgroundColor: 'rgba(55, 65, 81, 1)', color: 'rgba(156, 163, 175, 1)' }}>ASSIGNEE</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr style={{ borderBottom: '1px solid rgba(55, 65, 81, 1)' }}>
                            <td><Typography color="rgba(156, 163, 175, 1)" fontFamily="inter" padding={1}>{row.name}</Typography></td>
                            <td><Typography color="rgba(156, 163, 175, 1)" fontFamily="inter" border={'1px solid rgba(55, 65, 81, 1)'} padding={0.5} fontSize={12} width={'fit-content'} margin={'auto'}>{row.status}</Typography></td>
                            <td><Typography color="rgba(156, 163, 175, 1)" fontFamily="inter" padding={1}>{row.email}</Typography></td>
                            <td><Typography color="rgba(156, 163, 175, 1)" fontFamily="inter" padding={1}>{row.createdAt}</Typography></td>
                            <td><Typography border={1} width={'fit-content'} fontSize="12px" p={0.5} margin='auto' color="rgba(156, 163, 175, 1)" fontFamily="inter"  >{row.assignee}</Typography></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Box>
    );
}

export default CustomTable;
