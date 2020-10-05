package com.lister;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import android.os.Bundle;
import android.app.Activity;
import androidx.annotation.Nullable;

public class MainActivity extends ReactActivity {
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "lister";
  }

  /*
     Setup for getting initial intent data in the root component's props.
     Check out the App's useLayoutEffect where a toast is shown with the data
     captured here.
   */
  public static class CustomDelegate extends ReactActivityDelegate {
    private Bundle mInitialProps = null;
    private final @Nullable Activity mActivity;

    public CustomDelegate(Activity activity, String mainComponentName) {
      super(activity, mainComponentName);
      this.mActivity = activity;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
      String data = mActivity.getIntent().getDataString();
      if (data != null) {
        mInitialProps = new Bundle();
        // This will become a "data" property in the JS object
        mInitialProps.putString("data", data);
      }
      super.onCreate(savedInstanceState);
    }

    @Override
    protected Bundle getLaunchOptions() {
      return mInitialProps;
    }
  };

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new CustomDelegate(this, getMainComponentName());
  }
}
