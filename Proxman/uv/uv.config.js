self.__uv$config = {
    prefix: '/Proxman/uv/service/',
    bare: 'https://juniorhighmaths.tafca.co.uk/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/Proxman/uv/uv.handler.js',
    bundle: '/Proxman/uv/uv.bundle.js',
    config: '/Proxman/uv/uv.config.js',
    sw: '/Proxman/uv/uv.sw.js',
};
