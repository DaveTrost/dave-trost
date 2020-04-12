import React from 'react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { render } from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SkillList from './SkillList';

describe('Skill List content', () => {
  it('contains a component for each skill category when shallowly rendered', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<SkillList isDisplayed={true} />);
    mockAllIsIntersecting(true);
    const result = renderer.getRenderOutput();
    const shallowContentLevel1 = result.props.children;
    const shallowContentLevel2 = shallowContentLevel1[1].props.children;
    expect(result.type).toBe('div');
    expect(shallowContentLevel1[0].type).toBe('h3');
    expect(shallowContentLevel1[1].type).toBe('div');
    expect(shallowContentLevel2.length).toBeGreaterThanOrEqual(4);
    expect(shallowContentLevel2[0].type).toMatchInlineSnapshot(`[Function]`);
  });

  it('contains 4 specific categories', () => {
    const { getByText } = render(<SkillList isDisplayed={true} />);
    mockAllIsIntersecting(true);
    const languagesItem = getByText(/Typescript/i);
    const frontendItem = getByText(/Bootstrap/i);
    const backendItem = getByText(/Express/i);
    const toolsItem = getByText(/Github/i);
    expect(languagesItem).toBeInTheDocument();
    expect(frontendItem).toBeInTheDocument();
    expect(backendItem).toBeInTheDocument();
    expect(toolsItem).toBeInTheDocument();
  });
});
