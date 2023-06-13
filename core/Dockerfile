ARG BUILD_FROM
FROM ${BUILD_FROM}

# Synchronize with homeassistant/core.py:async_stop
ENV \
    S6_SERVICES_GRACETIME=220000

WORKDIR /usr/src

ARG WHEELS_LINKS \ 
    HOST 

## Setup Home Assistant
COPY . homeassistant/

RUN echo $(python3 --version)

RUN \
    pip3 install --no-cache --upgrade pip==22.0.2 -i https://pypi.org/simple/ \
    && pip3 install --no-cache-dir --index-url ${WHEELS_LINKS} \
    -r homeassistant/requirements.txt  --use-deprecated=legacy-resolver --use-deprecated=html5lib \
    && pip3 install --no-cache-dir --index-url ${WHEELS_LINKS} \
    -r homeassistant/requirements_all.txt  --use-deprecated=legacy-resolver --use-deprecated=html5lib \
    && pip3 install --no-cache-dir --index-url ${WHEELS_LINKS} \
    -e ./homeassistant  --use-deprecated=legacy-resolver --use-deprecated=html5lib \
    && python3 -m compileall homeassistant/homeassistant 

# Fix Bug with Alpine 3.14 and sqlite 3.35
# https://gitlab.alpinelinux.org/alpine/aports/-/issues/12524
# ARG BUILD_ARCH
# RUN \
#     if [ "${BUILD_ARCH}" = "amd64" ]; then \
#         export APK_ARCH=x86_64; \
#     elif [ "${BUILD_ARCH}" = "i386" ]; then \
#         export APK_ARCH=x86; \
#     else \
#         export APK_ARCH=${BUILD_ARCH}; \
#     fi \
#     && curl -O http://dl-cdn.alpinelinux.org/alpine/v3.13/main/${APK_ARCH}/sqlite-libs-3.34.1-r0.apk \
#     && apk add --no-cache sqlite-libs-3.34.1-r0.apk \
#     && rm -f sqlite-libs-3.34.1-r0.apk

# Home Assistant S6-Overlay
COPY rootfs /

WORKDIR /config
