// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import Fade from '@mui/material/Fade';
// import Typography from '@mui/material/Typography';
// import * as React from 'react';

// export default function AccordionTransition() {
//     const [expanded, setExpanded] = React.useState(false);

//     const handleExpansion = () => {
//         setExpanded((prevExpanded) => !prevExpanded);
//     };

//     return (
//         <div>
//             <Accordion
//                 expanded={expanded}
//                 onChange={handleExpansion}
//                 slots={{ transition: Fade }}
//                 slotProps={{ transition: { timeout: 400 } }}
//                 sx={[
//                     expanded
//                         ? {
//                             '& .MuiAccordion-region': {
//                                 height: 'auto',
//                             },
//                             '& .MuiAccordionDetails-root': {
//                                 display: 'block',
//                             },
//                         }
//                         : {
//                             '& .MuiAccordion-region': {
//                                 height: 0,
//                             },
//                             '& .MuiAccordionDetails-root': {
//                                 display: 'none',
//                             },
//                         },
//                 ]}
//             >
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel1-content"
//                     id="panel1-header"
//                 >
//                     <Typography>Why community.dev?</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Typography>
//                         Community.Dev is a platform that provide a community of people with similar mindset where poeple can 
//                         share there views, thoughts and ideas and experiences.
//                     </Typography>
//                 </AccordionDetails>
//             </Accordion>
//             <Accordion>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel2-content"
//                     id="panel2-header"
//                 >
//                     <Typography>Where and How to write?</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Typography>
//                         There is a write something section in Navbar from where you can write or post your views
//                         or anything but first you have to login

//                     </Typography>
//                 </AccordionDetails>
//             </Accordion>
//             <Accordion>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel2-content"
//                     id="panel2-header"
//                 >
//                     <Typography>Does Community.Dev provides user dashboard to manage our post and bookmarks?</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Typography>
//                        Yes, you can found it on navbar
//                     </Typography>
//                 </AccordionDetails>
//             </Accordion>
//             <Accordion>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel2-content"
//                     id="panel2-header"
//                 >
//                     <Typography>Does community.Dev admin are active on this web?</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Typography>
//                        Yes, they are active and continously monitoring the activites.
//                     </Typography>
//                 </AccordionDetails>
//             </Accordion>
//             <Accordion>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel2-content"
//                     id="panel2-header"
//                 >
//                     <Typography>Where i can see all posts?</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Typography>
//                        On explore section you can find all posts.
//                     </Typography>
//                 </AccordionDetails>
//             </Accordion>
//             <Accordion>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel2-content"
//                     id="panel2-header"
//                 >
//                     <Typography>Can i filter posts according to my required category?</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Typography>
//                        Yes,you can,
//                     </Typography>
//                 </AccordionDetails>
//             </Accordion>
//             <Accordion>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel2-content"
//                     id="panel2-header"
//                 >
//                     <Typography>Can i bookmark and comment on posts?</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Typography>
//                       Yes, you can.
//                     </Typography>
//                 </AccordionDetails>
//             </Accordion>
//         </div>
//     );
// }

import React from 'react'

export default function Accordion() {
  return (
    <div></div>
  )
}

