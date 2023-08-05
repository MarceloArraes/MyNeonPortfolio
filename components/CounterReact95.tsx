/* import { ComponentMeta } from '@storybook/react';
2import React, { useState } from 'react';
3import { Button, Counter, Frame } from 'react95';
4import styled from 'styled-components';
5
6const Wrapper = styled.div`
7  padding: 5rem;
8  background: ${({ theme }) => theme.desktopBackground};
9  .counter-wrapper {
10    display: flex;
11    margin-top: 1rem;
12  }
13  .counter-wrapper button {
14    margin-left: 0.5rem;
15    height: 51px;
16  }
17  .wrapper {
18    padding: 1rem;
19  }
20`;
21
22export default {
23  title: 'Other/Counter',
24  component: Counter,
25  decorators: [story => <Wrapper>{story()}</Wrapper>]
26} as ComponentMeta<typeof Counter>;
27
28export function Default() {
29  const [count, setCount] = useState(13);
30  const handleClick = () => setCount(count + 1);
31  return (
32    <Frame className='wrapper'>
33      <Counter value={123456789} minLength={11} size='lg' />
34
35      <div className='counter-wrapper'>
36        <Counter value={count} minLength={3} />
37        <Button onClick={handleClick}>Click!</Button>
38      </div>
39    </Frame>
40  );
41}
42
43Default.story = {
44  name: 'default'
45}; */
