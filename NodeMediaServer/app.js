const NodeMediaServer = require("node-media-server");

const config = {
    logType: 3,
    rtmp: {
        port: 1935,
        chunk_size: 10000,
        gop_cache: true,
        ping: 30,
        ping_timeout: 60,
    },
    http: {
        port: 8000,
        allow_origin: "*",
    },
};

var nms = new NodeMediaServer(config);
nms.run();

nms.on("donePublish", (id, StreamPath, args) => {
    // eslint-disable-next-line no-console
    console.log("test");
});
