package io.appium.uiautomator2.http;

import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.socket.SocketChannel;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpServerCodec;

import java.util.List;

public class ServerInitializer extends ChannelInitializer<SocketChannel> {

    private final List<IHttpServlet> handlers;

    public ServerInitializer(List<IHttpServlet> handlers) {
        this.handlers = handlers;
    }

    @Override
    public void initChannel(SocketChannel ch) throws Exception {
        ChannelPipeline pipeline = ch.pipeline();
        pipeline.addLast("codec", new HttpServerCodec());
        pipeline.addLast("aggregator", new HttpObjectAggregator(65536));
        pipeline.addLast("handler", new ServerHandler(handlers));
    }
}
