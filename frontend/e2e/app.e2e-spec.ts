import { VgangappPage } from './app.po';

describe('vgangapp App', function() {
  let page: VgangappPage;

  beforeEach(() => {
    page = new VgangappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
