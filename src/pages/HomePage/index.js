import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Icon } from '@iconify/react';
import MHidden from '../../components/@mui-extend/MHidden';
import DesktopHeroSection from './heroSections/DesktopHeroSection';
import MobileHeroSection from './heroSections/MobileHeroSection';

export default function HomePage() {

  return (
    <>
      <MHidden width="mdDown">
        <DesktopHeroSection />
      </MHidden>

      <MHidden width="mdUp">
        <MobileHeroSection />
      </MHidden>

      <Stack maxWidth="xl" spacing={2} mx="auto" mt={16}>
        <Box>
          <Grid container alignItems="center" spacing={12}>
            <Grid item md={8}>
              <Typography fontSize={21}>
                Dripping Dino’s is more than just an NFT project, we are creating a lifestyle brand that will be built together with our amazing community. Our collection will consist of <Typography variant="primary" color="primary" component="span">8000 unique artworks</Typography> created with pure passion and precision by our highly skilled designing team. We are making sure you’re not only dripped out in the Digital world but also in the real world.
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Box position="relative">
                <Box component="img" src="/assets/images/dino_4.png" alt="" />
                <Box component="img" src="/assets/images/shadow_1.png" alt="" position="absolute" />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Grid container alignItems="center" spacing={12}>
            <Grid item md={4}>
              <Box position="relative">
                <Box component="img" src="/assets/images/dino_1.png" alt="" />
                <Box component="img" src="/assets/images/shadow_2.png" alt="" position="absolute" />
              </Box>
            </Grid>

            <Grid item md={8}>
              <Typography fontSize={21}>
                We will not only deliver the most outstanding and aesthetically pleasing art, but <Typography variant="primary" color="primary" component="span">we are also making sure that our holders will get real utility from them.</Typography> Holders will be able to earn our native $DRIP token every day and spend/invest it into our ecosystem. Our DAO will support the project long term and help fund all future projects and plans such as our charity and designer brand. We set up our tokenomics to be as stable as possible with multiple institutions backing the value of $DRIP.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Stack>

      <Stack className="skewBar" sx={{ height: { xl: 60, lg: 60, md: 40, sm: 30 } }} justifyContent="center" mt={20}>
        <Stack direction="row" spacing={5}>
          {
            [0, 1, 2, 3, 4].map(itemIndex => (
              <marquee key={itemIndex}>
                <Stack direction="row" spacing={5} alignItems="center">
                  <Icon icon="emojione-monotone:eight-pointed-star" />
                  <Typography textTransform="uppercase" color={grey[100]} fontSize={{ xl: 16, lg: 16, md: 12, sm: 10, xs: 8 }}>
                    More than just a fashion
                  </Typography>
                </Stack>
              </marquee>
            ))
          }
        </Stack>
      </Stack>
    </>
  );
};