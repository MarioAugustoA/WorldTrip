import { Grid, GridItem } from "@chakra-ui/react";
import Caracteristica from "./caracteristica";

export default function Caracteristicas() {
        
    return(
        <Grid 
          templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)" ]}
          w="100%"
          justifyContent="space-between"
          align="center"
          mt={["10", "32"]}
          mx="auto"
          maxW="1160px"
          gap={[1, 5]}
          >
            <GridItem >
                <Caracteristica icon="cocktail 1" text="vida noturna"  />
            </GridItem>
            <GridItem>
                <Caracteristica icon="Beach" text="praia"  />
            </GridItem>
            <GridItem >
                <Caracteristica icon="Modern" text="moderno"  />
            </GridItem>
            <GridItem >
                <Caracteristica icon="museum 1" text="clássico"  />
            </GridItem>
            <GridItem colSpan={[2,2,2,1]} >
                <Caracteristica icon="earth 1" text="e mais..."  />
            </GridItem>
        </Grid>
    )
}