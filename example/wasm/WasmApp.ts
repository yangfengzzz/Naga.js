import init, { glsl_compile } from './glsl_wgsl_compiler';

const glsl = `
#version 450

#define HAHAHA

layout(set = 0, binding = 3) uniform texture2D u_emissiveTexture;
layout(set = 0, binding = 4) uniform sampler u_emissiveSampler;

void main() {
#ifdef HAHAHA
    vec4 happy = vec4(0.0);
#endif
    texture(sampler2D(u_emissiveTexture, u_emissiveSampler), vec2(0.0));
    
    gl_Position = vec4(1.0, 0.0, 1.0, 0.0);
}
`

const wgsl_result = `
struct VertexOutput {    
    @builtin(position) member: vec4<f32>
}

var<private> gl_Position: vec4<f32>;

fn main_1() {    
    gl_Position = vec4<f32>(1.0, 0.0, 1.0, 0.0);    
    return; 
}

@vertex fn main() -> VertexOutput {
     main_1();    
     let _e1 = gl_Position;   
     return VertexOutput(_e1);
}
`

await init('src/wasm/glsl_wgsl_compiler_bg.wasm');

const wgsl = glsl_compile(glsl, "vertex", false);

debugger;