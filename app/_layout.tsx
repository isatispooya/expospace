import { View } from "react-native";
import "react-native-reanimated";
import { WebView } from "react-native-webview";

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
    <View style={{ flex: 1, paddingVertical: 30 }}>
      <WebView
        source={{ uri: "https://my.isatispooya.com" }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        originWhitelist={["*"]}
        injectedJavaScript={injectedJS}
        allowsInlineMediaPlayback={true}
        allowsBackForwardNavigationGestures={true}
        startInLoadingState={true}
      />
    </View>
  );
}
