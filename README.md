# myPersonalProject

##installer ionic:

```bash
	$ npm install -g cordova ionic
```
##créer un appli:
```bash
	$ ionic start --v2 myApp tabs
```
##Démarrer/exécuter l’appli dans le navigateur
```bash
	$ ionic serve
```
##Démarrer l’application android/ios
```bash
	$ ionic run android[ios, browser]
```
##Share app with testers : 
http://view.ionic.io
	

##Login tutoriel: 
https://devdactic.com/login-ionic-2/
	
##créer service component : 
```bash
$ ionic g provider authService
```
##créer page component : 
```bash
$ ionic g page login
```
##ajouter platform android : 
```bash
$ cordova platform add android
```

##run android  : 
```bash
$ ionic run android
```

##Pour générer une version release pour Android:
```bash
$ cordova build --release android
```
Le fichier apk généré se trouve dans le répertoire platforms/android/build/outputs/apk
Maintenant, nous avons besoin de signer l'APK non signé:

##Générer notre clé privée en utilisant la keytool :
 ```bash
$ keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
```
##Signer l'apk :
```bash
 $ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore android-release-unsigned.apk alias_name
 ```
Optimisation de l'apk:
```bash
$ ./zipalign -v 4 android-release-unsigned.apk feve_v1.6.apk
```
## Générer une version Debug  

Pour générer une version debug:
des fois cela nécessite un fichier de configuration de proxy gradle.properties

```bash
systemProp.http.proxyHost=***.fr
systemProp.http.proxyPort=8085
systemProp.http.proxyUser=mni
systemProp.http.proxyPassword=pwd
systemProp.http.nonProxyHosts=*.e***.com|localhost  

systemProp.https.proxyHost=***.fr
systemProp.https.proxyPort=8085
systemProp.https.proxyUser=mni
systemProp.https.proxyPassword=pwd
systemProp.https.nonProxyHosts=*.e***.com|localhost  
```

```bash
$ cordova build --debug android
```
## Optimisation de l'apk:
copier ..\sdk\build-tools\25.0.2\zipalign et coller dans le répertoire de votre projet
```bash
$ zipalign -v 4 android-release-unsigned.apk feve_debug.apk
```
