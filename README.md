# Hello World with Rust, Web/TypeScript and gRPC

## Rust to Rust

```
cargo run --bin hello-server
cargo run --bin hello-client
```

## Web to Rust

```
cargo run --bin hello-server
docker run -d -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro \
    -p 8080:8080 -p 9901:9901 envoyproxy/envoy:v1.16.1
cd web
yarn
yarn generate
yarn start
```

## Note

If you're on Linux, you should 
1. tweak envoy.yaml (replace host.docker.internal with 0.0.0.0)
2. change envoy start command to
```
docker run -d -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro \
    --network=host envoyproxy/envoy:v1.16.1
```