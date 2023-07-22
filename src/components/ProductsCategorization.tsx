import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

import { headingCategorys } from "../data/categoryes";

export const ProductsCategorization = () => {
  return (
    <Accordion w="100%" marginTop={6} fontSize="13px" dir="rtl" allowMultiple>
      {headingCategorys.map((category) => (
        <AccordionItem key={category.id} padding={2}>
          <h2>
            <AccordionButton>
              <Box fontSize="15px" as="span" flex="1" textAlign="right">
                {category.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {category.content.map((content) => (
              <AccordionItem key={content.title} padding={2}>
                <h2>
                  <AccordionButton>
                    <Box fontSize="15px" as="span" flex="1" textAlign="right">
                      {content.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}></AccordionPanel>
              </AccordionItem>
            ))}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
