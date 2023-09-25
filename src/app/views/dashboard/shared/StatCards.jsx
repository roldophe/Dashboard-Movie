import { Box, Card, Grid, Icon, IconButton, styled, Tooltip } from '@mui/material';
import { Small } from 'app/components/Typography';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px !important',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  '& small': { color: theme.palette.text.secondary },
  '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main },
}));

const Heading = styled('h6')(({ theme }) => ({
  margin: 0,
  marginTop: '4px',
  fontSize: '14px',
  fontWeight: '500',
  color: theme.palette.primary.main,
}));

const StatCards = () => {
  const cardList = [
    { name: 'Trending',nav: 'datatables/trending', total_results: '20000 Total Results',icon: 'trending_up'},
    { name: `What's Popular`,nav: 'datatables/popular', total_results: '804222 Total Results', icon: 'whatshot' },
    { name: 'Tv Shows',nav: 'datatables/ontv', total_results: '156168 Total Results', icon: 'tv' },
    { name: 'Popular People',nav: 'material/people', total_results: '10000 Total Results', icon: 'people-alt' },
  ];
  const navigate = useNavigate();

  const handleItemClick = (route) => {
      navigate(route);
  };
  return (
    <Grid container spacing={3} sx={{ mb: '24px' }}>
      {cardList.map((item, index) => (
        <Grid item xs={12} md={6} key={index} onClick={() => handleItemClick(`/${item.nav.toLowerCase()}`)}>
          <StyledCard elevation={6}>
            <ContentBox>
              <Icon className="icon">{item.icon}</Icon>
              <Box ml="12px">
                <Small>{item.name}</Small>
                <Heading>{item.total_results}</Heading>
              </Box>
            </ContentBox>

            <Tooltip title="View Details" placement="top">
              <IconButton>
                <Icon>arrow_right_alt</Icon>
              </IconButton>
            </Tooltip>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatCards;
