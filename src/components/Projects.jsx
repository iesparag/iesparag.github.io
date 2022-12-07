import { Box, Heading ,Grid, Text} from '@chakra-ui/react'
import React from 'react'
import "./Projects.css"


const Projects = () => {
  return (
    <div>
        {/* heading*/}
        <Box className='section-title' >
           <Heading opacity="0.5" as="h2"  size="2xl" >Projects</Heading>
        </Box>
        {/* below content */}
       <Box>
        <Grid>
        
<Box  className="cards">
  <Box  bg="yellow" className="card">
    <h2 className="card-title">Seal</h2>
    <img src="https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="" / >
    <p className="card-desc">Hawks are a group of medium-sized diurnal birds of prey of the family Accipitridae. Hawks are widely distributed and vary greatly in size.
      The subfamily Accipitrinae includes goshawks, sparrowhawks, sharp-shinned hawks and others. This subfamily are mainly woodland birds with long tails and high visual acuity. They hunt by dashing suddenly from a concealed perch.</p>
  </Box>
  <div className="card">
    <h2 className="card-title">Lion</h2>
    <img src="https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" / >
    <Text bg="yellow" className="card-desc">The lion (Panthera leo) is a species in the family Felidae and a member of the genus Panthera. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions have a prominent mane.</Text>
  </div>
  <div className="card">
    <h2 className="card-title">Hawk</h2>
    <img src="https://images.unsplash.com/photo-1534251369789-5067c8b8602a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt=""/>
    <p className="card-desc">Hawks are a group of medium-sized diurnal birds of prey of the family Accipitridae. Hawks are widely distributed and vary greatly in size.
      The subfamily Accipitrinae includes goshawks, sparrowhawks, sharp-shinned hawks and others. This subfamily are mainly woodland birds with long tails and high visual acuity. They hunt by dashing suddenly from a concealed perch.</p>
  </div>
</Box>
        </Grid>
       </Box>


    </div>
  )
}

export default Projects