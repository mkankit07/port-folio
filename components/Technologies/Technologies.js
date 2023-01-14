/* eslint-disable */

import React from 'react';
import { DiFirebase, DiReact, DiZend,DiNodejsSmall,DiBootstrap,DiJqueryUiLogo,DiJavascript,DiCss3Full } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <>
   <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
  <Section id="tech">
    <SectionTitle>Skills</SectionTitle>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>ReactJS / NestJS</ListTitle>
          <ListParagraph>
            Experiece with <br />
            ReactJS / NestJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiNodejsSmall size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>NodeJS</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiNodejsSmall size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>ExpressJS</ListTitle>
          <ListParagraph>
            Experience with <br />
            ExpressJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>MongoDB / MYSQL / Postgres</ListTitle>
          <ListParagraph>
            Experience with <br />
            Databases 
          </ListParagraph>
        </ListContainer>
      </ListItem> <ListItem>
        <picture>
          <DiJqueryUiLogo size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle> Sequelize / Knex / mongoose</ListTitle>
          <ListParagraph>
            Experience with <br />
            Query builder and ORM
          </ListParagraph>
        </ListContainer>
      </ListItem> <ListItem>
        <picture>
          <DiNodejsSmall size="3rem" />
          <DiJavascript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>GraphQl</ListTitle>
          <ListParagraph>
            Experience with <br />
            GraphQl
          </ListParagraph>
        </ListContainer>
      </ListItem> <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Socket.io</ListTitle>
          <ListParagraph>
            Experience with <br />
            Socket.io
          </ListParagraph>
        </ListContainer>
      </ListItem> <ListItem>
        <picture>
          <DiBootstrap size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Bootstrap/MUI</ListTitle>
          <ListParagraph>
            Experience with <br />
            bootstrap/MUI
          </ListParagraph>
        </ListContainer>
      </ListItem> <ListItem>
        <picture>
          <DiCss3Full size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>HTML/CSS</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML/CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
  </>
 
);

export default Technologies;