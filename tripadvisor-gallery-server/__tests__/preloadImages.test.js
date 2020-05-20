import preloadImages from '../client/src/helpers/preloadImages';
import exampleData from '../ExampleActivityData';

describe('Images should be preloaded through link tabs in the head of the HTML document', () => {
  test('HTML should not have any link tags before preloadImages is run', () => {
    const links = document.querySelectorAll('link');
    expect(links.length).toBe(0);
  });
  test('preloadImages should preload for each image of a particular activity page', () => {
    const { photos } = exampleData;
    preloadImages(photos);
    const links = document.querySelectorAll('link');
    expect(links.length).toBe(photos.length);
  });
  test('link tags should include the preload attribute', () => {
    const { photos } = exampleData;
    preloadImages([photos[0]]);
    const link = document.querySelector('link');
    const attr = link.getAttribute('rel');
    expect(attr).toBe('preload');
  });
  test('link tags should include the url of the target content', () => {
    const { photos } = exampleData;
    preloadImages([photos[0]]);
    const link = document.querySelector('link');
    const href = link.getAttribute('href');

    const isUrlPresent = href.indexOf(photos[0].link) !== -1;
    expect(isUrlPresent).toBe(true);
  });
});
