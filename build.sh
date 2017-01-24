rm -rf ./build &&
mkdir ./build &&
cp -R api build/api &&
cp  ./package.json ./build/package.json &&
cd build &&
npm i --production &&
cd .. &&
tar -zcvf metrolink-api.tar.gz build/*
