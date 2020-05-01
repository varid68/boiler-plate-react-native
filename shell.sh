# #!/bin/bash

read -p "ketik 1 untuk run - 2 untuk build - 3 untuk buka xcode :" pointing
if [ "$pointing" = 1 ]
then
  cd ./android && ./gradlew clean
  cd ../ && react-native run-android
elif [ "$pointing" = 2 ]
then
  cd ./android && ./gradlew clean && ./gradlew assembleRelease
else
  cd ios && open AwesomeProject.xcworkspace
fi