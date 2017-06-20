import { SimplySocialPage } from './app.po';

describe('simply-social App', () => {
  let page: SimplySocialPage;

  beforeEach(() => {
    page = new SimplySocialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
