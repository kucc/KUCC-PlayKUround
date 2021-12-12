import React from 'react';
// import { Div } from '@components';
import { Div, Text } from '@components';

export const Test = () => {
  return (
    <>
      <Div center col>
        <Text>thin</Text>
        <Text bold>body1 & h1</Text>
        <Text h4 regular>
          h4 & regular
        </Text>
        <Text h4 regular mark>
          h4 & regular & mark
        </Text>
        <Text h4 medium blue_3>
          h2 & medium & blue_3
        </Text>
        <Text h3 bold grey>
          h3 & Bold & grey
        </Text>
        <Text h2 bold primary_1>
          h2 & Bold & primary_1
        </Text>
        <Text h1 medium secondary_5>
          h1 & medium & secondary_5
        </Text>
        <Text h1 bold red_7>
          Bold & h1 & red_7
        </Text>
      </Div>
    </>
  );
};
