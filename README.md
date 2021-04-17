Requirements:

* node + npm
* `npm install react-native-cli`
* For iOS: Cocoapods

1. Clone these 3 repositories in folders next to each other:

  * https://github.com/fielddaylab/NomenNative
  * https://github.com/fielddaylab/SiftrNative
  * https://github.com/fielddaylab/Viola

2. In NomenNative, checkout f7aebc2fbc47b929713c453959d13753b81892bc

3. In SiftrNative, checkout 2a196a0944322c64155c00b38541d92632eb315f

4. Apply the fix in `node_modules` from https://igniz87.medium.com/react-native-unknown-argument-type-attribute-in-method-rctappstate-5daf904b2367 (this is needed due to the older React Native version being used on Xcode 12)

5. `make`

6. Extra iOS dependencies: `cd ios && pod install`

iOS: open `ios/GMiOS.xcworkspace`

  * To run non-dev mode, build with Release scheme.

Android: run `react-native run-android` (needs Android dev kit installed)

  * To make release APK, `cd android/ && ./gradlew assembleRelease`

  * To directly run the release version, `react-native run-android --variant=release`

  * For both of the above, you need this in `~/.gradle/gradle.properties`,
    with the key password in place of `*****`:

        FDL_RELEASE_STORE_FILE=fdl-release-key.keystore
        FDL_RELEASE_KEY_ALIAS=FieldDayLab
        FDL_RELEASE_STORE_PASSWORD=*****
        FDL_RELEASE_KEY_PASSWORD=*****

    And then copy `fdl-release-key.keystore` to `android/app/fdl-release-key.keystore`

Tech notes:

* Currently an old version of React Native (0.56) is being used. This should probably be upgraded to avoid future incompatibilities.

* The separate repo folders should probably be turned into submodules within this repo, or just have their contents copied in.

* To rebuild the images from the source folder, download it from Google Drive, go into `NomenNative/plants-new`, edit `build.rb` to have the right `drive` location, then run `build.rb` (requires Ruby).
