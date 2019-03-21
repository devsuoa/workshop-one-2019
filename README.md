
# Developer's Society Workshop Prerequsities

As a prerequisite to the workshops, you'll have to install some software.

* [Visual Studio Code] - Source code editor
* [node.js] - Open-source, cross-platform JavaScript run-time environment
* [npm] - Package manager for the JavaScript programming language
* [git] - version control system
* [expo] - tools to allow us to create a React Native project

As some installtion of software occurs when we create a new expo project, we'll be doing this before the first workshop
&nbsp;
# Windows 
##### Node.js and npm Installation Steps
1) Download the windows installer from Nodejs.org
2) Run the installer (the .msi file)
3) Follow the prompts in the installer
4) Restart your computer

npm will be installed automtically alongside node

To test if node and npm were installed properly, open the command line and run these simple commands:
```node -v ``` this should print the version number of node, e.g. ```v0.10.35```
```npm -v``` this should print the version number of npm, e.g. ```1.4.28```

##### Visual Studio Code Installation
1) Download the windows intaller from code.visualstudio.com/download 
2) Run the installer and follow the prompts

##### Git Installation
Git will be the version control system used throughout the devs workshops. For those which don't know what a version control system is, 
git is basically a content tracker. Git can be used to store and update content.

1) Download the git installer from https://git-scm.com/downloads
2) Run the installer and follow the prompts


##### Expo Installation
We will be using expo tools to build our react native apps. Expo is great as it handles a lot of headache tasks itself and provide smooth APIs 
that work with React Native app outside the box.Expo CLI sets up a development environment on your local machine and you can be writing a 
React Native app within minutes.

1) Open the command line
2) Ensure npm is installed by running ```npm -v``` (a version number should be displayed)
3) Type ```npm install -g expo-cli```
4) Download Expo on your phone:
 &nbsp; &nbsp;Playstore https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en
 &nbsp; &nbsp;Appstore https://itunes.apple.com/us/app/expo-client/id982107779?mt=8
 
 ##### Creating and testing our first Expo app
 1) Open the terminal
 2) Navigate to the directory where you want expo projects to be saved
 3) Type ```expo init swipe-app```
 4) Type ```npm start```
 5) Installation will take place, afterwards a QR code should appear in the terminal
 6) Open the expo app on your phone and scan the QR code

 Note: If you are on an iPhone, the Expo app may not have a built in QR code scanner- just use your phones camera instead!

&nbsp;
&nbsp;
# Mac 

We'll use **Homebrew** to install the revelant software

##### Why Homebrew?

Homebrew is a package manager for the mac - it makes installing most open source software (like node) extremely simple

##### Homebrew Installation
Open terminal and run command ``` /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" ```, you'll see messages
in the Terminal explaining what you need to do to complete the installation process

##### Node.js and npm Installation
1) Open the Terminal and type ```brew install node```
2) Sit back and wait

To test if node and npm were installed properly, open the command line and run these simple commands:
```node -v ``` this should print the version number of node, e.g. ```v0.10.35```
```npm -v``` this should print the version number of npm, e.g. ```1.4.28```

##### Visual Studio Code Installation
1) Open the Terminal and type ```brew cask install visual-studio-code```
2) With homebrew thats all you have to do.

##### Git Installation
1) Open the terminal
2) Type ```brew install git```

##### Expo Installation
1) Open the command line
2) Ensure npm is installed by running ```npm -v``` (a version number should be displayed)
3) Type ```npm install -g expo-cli```
4) Download Expo on your phone:
 &nbsp; &nbsp;Playstore https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en
 &nbsp; &nbsp;Appstore https://itunes.apple.com/us/app/expo-client/id982107779?mt=8
 
 ##### Creating and testing our first Expo app
 1) Open the terminal
 2) Navigate to the directory where you want expo projects to be saved
 3) Type ```expo init swipe-app```
 4) Type ```npm start```
 5) Installation will take place, afterwards a QR code should appear in the terminal
 6) Open the expo app on your phone and scan the QR code

 Note: If you are on an iPhone, the Expo app may not have a built in QR code scanner- just use your phones camera instead!

