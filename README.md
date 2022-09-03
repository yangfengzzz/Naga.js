# naga.js

naga.js compiled by using [rustwasm toolkit](https://rustwasm.github.io/docs/book/#rust--and-webassembly-)

## Getting Started

If you want to be able to use Rust for wasm then you need an environment to be able to do that! If
you haven't already you'll need to install [rustup][rustup] (the official tool) in order to install
and manage different versions of the Rust compiler. Follow the instructions on the site to get it
installed on your machine. For the time being, you'll need Rust nightly when working with wasm:

```bash
$ rustup default nightly
```

Once that's installed you'll need to get the `wasm32-unknown-unknown` toolchain.

```bash
$ rustup target add wasm32-unknown-unknown --toolchain nightly
```

Next up if you're interested in making small wasm binaries you'll want to
install the [wasm-gc][wasm-gc] tool to make smaller binaries and to work around bugs
in the compiler toolchain for now:

```bash
$ cargo install wasm-gc
```

And finally if you're *really* interested in making small wasm binaries you'll
want to install `wasm-opt` from the [binaryen toolkit][binaryen].

[rustup]: https://www.rustup.rs/
[binaryen]: https://github.com/WebAssembly/binaryen
[wasm-gc]: https://github.com/alexcrichton/wasm-gc

## Build the Project

We use `wasm-pack` to orchestrate the following build steps:

* Ensure that we have Rust 1.30 or newer and the `wasm32-unknown-unknown`
  target installed via `rustup`,
* Compile our Rust sources into a WebAssembly `.wasm` binary via `cargo`,
* Use `wasm-bindgen` to generate the JavaScript API for using our Rust-generated
  WebAssembly.

To do all of that, run this command inside the project directory:

```
wasm-pack build --target web
```

When the build has completed, we can find its artifacts in the `pkg` directory,
and it should have these contents:

```
pkg/
├── package.json
├── README.md
├── naga_wasm_bg.wasm
├── naga_wasm.d.ts
|—— naga_wasm_bg.wasm.d.ts
└── naga_wasm.js
```

The `README.md` file is copied from the main project, but the others are
completely new.
