import com.facebook.react.bridge.JSIModulePackage;
import com.swmansion.reanimated.ReanimatedJSIModulePackage;

// Inside your MainApplication class
@Override
protected JSIModulePackage getJSIModulePackage() {
    return new ReanimatedJSIModulePackage(); // <- Add this line
}
import com.airbnb.android.react.maps.MapsPackage;

public class MainApplication extends Application implements ReactApplication {
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new MapsPackage() // Add this line
        );
    }
}
