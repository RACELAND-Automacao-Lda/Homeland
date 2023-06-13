#!/bin/bash

# Stop on errors
set -e

cd "$(dirname "$0")/../.."
mv homeassistant-homekit-raceland homeassistant-homekit-raceland-old

TOKEEP="
./homeassistant-homekit-raceland/homeassistant/Dockerfile\n
./homeassistant-homekit-raceland/homeassistant/.devcontainer\n
./homeassistant-homekit-raceland/homeassistant/homeassistant/components/mjpeg
" 

MVCOMPONENTS="mjpeg
"


#curl -s https://api.github.com/repos/USER/REPO/releases/latest | grep -oP '"tag_name": "\K(.*)(?=")'|
echo "2021.11.0" |
    xargs -I % sh -c 'wget https://github.com/home-assistant/core/archive/refs/tags/%.zip && unzip %.zip && rm %.zip && mv core-% homeassistant'
    # wget "https://github.com/home-assistant/frontend/archive/refs/tags/"{}'.zip' && unzip {}'.zip' 


git clone https://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@github.com/RACELAND-Automacao-Lda/homeassistant-homekit-raceland.git

mkdir -p tempf/homeassistant/components/

echo -e $TOKEEP | xargs -I % sh -c 'cp -rf % ./tempf && rm -rf %'

cp -rf ./homeassistant-homekit-raceland/homeassistant/homeassistant/auth/__init__.py ./temp/homeassistant-homekit-raceland/homeassistant/

rm -rf ./homeassistant-homekit-raceland/homeassistant

cp -rf ./homeassistant ./homeassistant-homekit-raceland/homeassistant

echo -e $MVCOMPONENTS |  xargs -I % mv ./tempf/% ./tempf/homeassistant/components/%

cp -rf ./tempf/* ./homeassistant-homekit-raceland/homeassistant/

rm -rf ./tempf

rm -rf ./homeassistant
