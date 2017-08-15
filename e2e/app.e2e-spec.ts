import { Ng4BootstrapMultilevelDropdownPage } from './app.po';

describe('ng4-bootstrap-multilevel-dropdown App', () => {
  let page: Ng4BootstrapMultilevelDropdownPage;

  beforeEach(() => {
    page = new Ng4BootstrapMultilevelDropdownPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
