import 'react-native-reanimated';

import { WebView } from 'react-native-webview';

export default function RootLayout() {
  const injectedJS = `
  document.addEventListener('contextmenu', event => event.preventDefault());
  document.addEventListener('keydown', function (event) {
    if (
      event.key === 'F12' ||
      (event.ctrlKey && event.shiftKey && event.key === 'I') ||
      (event.ctrlKey && event.shiftKey && event.key === 'J') ||
      (event.ctrlKey && event.key === 'U')
    ) {
      event.preventDefault();
    }
  });
  true;
`;




  return (
    <WebView
    javaScriptEnabled={true}
    domStorageEnabled={true}
    injectedJavaScript={injectedJS}
    source={{ uri: 'https://my.isatispooya.com' }}
    />
  );
}
