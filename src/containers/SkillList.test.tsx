import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SkillList from './SkillList';

describe('Skill List content', () => {
  it('contains a sub-component for each skill when shallowly rendered', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<SkillList />);
    const result = renderer.getRenderOutput();
    const shallowContentLevel1 = result.props.children;
    const shallowContentLevel2 = shallowContentLevel1[1].props.children;
    expect(result.type).toBe('div');
    expect(shallowContentLevel1[0].type).toBe('h3');
    expect(shallowContentLevel1[1].type).toBe('div');
    expect(shallowContentLevel2.length).toBeGreaterThanOrEqual(7);
    expect(shallowContentLevel2[0]).toMatchInlineSnapshot(`
      <Skill
        imageUrl="typescript.png"
        infoUrl="https://www.typescriptlang.org/"
        title="Typescript"
      />
    `);
  });
});
