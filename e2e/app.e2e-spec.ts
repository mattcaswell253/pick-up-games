import { PickUpGamePage } from './app.po';

describe('pick-up-game App', function() {
  let page: PickUpGamePage;

  beforeEach(() => {
    page = new PickUpGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
