rm -rf ./build &&
mkdir ./build &&
NODE_ENV=production &&
WEBPACK_ENV=production webpack -p &&
cp -R api build/api &&
cp -R client build/client &&
cp  ./package.json ./build/package.json &&
cd build &&
npm i --production &&
cd .. &&
tar -zcvf metrolink-dashboard.tar.gz build/*
