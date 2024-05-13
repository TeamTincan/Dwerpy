self.__uv$config = {
    prefix: '/uv/service/',
    bare: 'https://interstellar-three-virid.vercel.app/o/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: './uv/uv.handler.js',
    bundle: './uv/uv.bundle.js',
    config: './uv/uv.config.js',
    sw: './uv/uv.sw.js',
};
