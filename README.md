For Rust to Rust

```
cargo run --bin hello-server
cargo run --bin hello-client
```

For Web to Rust

```
cargo run --bin hello-server
docker run -d -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro \
    -p 8080:8080 -p 9901:9901 envoyproxy/envoy:v1.16.1
cd web
yarn
yarn generate
yarn start
```