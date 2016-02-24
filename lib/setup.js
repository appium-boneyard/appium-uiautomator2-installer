import request from 'request-promise';
import path from 'path';
import log from './logger';

const rootDir = path.resolve(__dirname, '..', '..');
const ServerSrcApk = 'appium-uiautomator2-server-debug-unaligned.apk';
const UiAutomatorServerApk = 'appium-uiautomator2-server-debug-androidTest-unaligned.apk';
const UI_AUTO2_APK_PATH = path.resolve(rootDir, 'uiautomator2', 'appium-uiautomator2-server', 'build',  'outputs', ServerSrcApk);
const UI_AUTO2_TEST_APK_PATH = path.resolve(rootDir, 'uiautomator2', 'appium-uiautomator2-server', 'build', 'outputs', UiAutomatorServerApk); 

async function setupUiAutomator2 () {
	
  log.info(`Determining server apk location`);
  log.info("Server apk : "+ UI_AUTO2_APK_PATH);
  log.info("Test apk : "+ UI_AUTO2_TEST_APK_PATH); 
}

export { setupUiAutomator2, UI_AUTO2_APK_PATH, UI_AUTO2_TEST_APK_PATH };
