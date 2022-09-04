import init, { glsl_compile } from './glsl_wgsl_compiler';

const glsl = `
#version 450

#define MACRO_TEST

layout(set = 0, binding = 3) uniform texture2D u_emissiveTexture;
layout(set = 0, binding = 4) uniform sampler u_emissiveSampler;

void main() {
#ifdef MACRO_TEST
    vec4 baseColor = vec4(0.0);
#endif
    texture(sampler2D(u_emissiveTexture, u_emissiveSampler), vec2(0.0));
    
    gl_Position = vec4(1.0, 0.0, 1.0, 0.0);
}
`

await init('wasm/glsl_wgsl_compiler_bg.wasm');

const wgsl = glsl_compile(glsl, "vertex", false);

debugger;