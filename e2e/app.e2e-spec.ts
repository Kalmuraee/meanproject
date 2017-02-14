import { MeanprojectPage } from './app.po';

describe('meanproject App', function() {
  let page: MeanprojectPage;

  beforeEach(() => {
    page = new MeanprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
