import { cnoise21 } from "@/modules/glsl/noise"
export const fragmentShader = `
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_scroll;  // New scroll uniform
varying vec2 v_uv;

${cnoise21}

float random(vec2 p) {
  vec2 k1 = vec2(
    23.14069263277926,
    2.665144142690225
  );
  return fract(cos(dot(p, k1)) * 12345.6789);
}

void main() {
  vec2 uv = v_uv;
  vec2 mouse = u_mouse;
  
  // Add scroll effect to the noise seeds
  vec2 seed1 = uv * 2.0 + mouse * 0.5 + vec2(0.0, u_scroll * 0.5);
  vec2 seed2 = uv * 3.5 + mouse * 0.3 + vec2(0.0, u_scroll * 1.0);
  vec2 seed3 = uv * 1.2 + mouse * 0.8 + vec2(0.0, u_scroll * 1.5);
  
  float noise1 = cnoise21(seed1);
  float noise2 = cnoise21(seed2) * 0.5;
  float noise3 = cnoise21(seed3) * 0.3;
  
  float combinedNoise = noise1 + noise2 + noise3;
  
  float mouseInfluence = length(mouse) * 0.4;
  float distanceFromMouse = distance(uv, mouse * 0.5 + 0.5);
  float mouseEffect = exp(-distanceFromMouse * 3.0) * mouseInfluence;
  
  combinedNoise += mouseEffect;
  
  vec3 color1 = vec3(0.0, 0.0, 0.0);
  vec3 color2 = vec3(0.1, 0.2, 0.55);
  vec3 color3 = vec3(0.4, 0.3, 0.95);
  vec3 color4 = vec3(0.1, 0.0, 0.0);
  vec3 black = vec3(0.02, 0.02, 0.05);
  
  float threshold1 = -0.3 + mouseEffect * 0.5;
  float threshold2 = 0.0 + mouseEffect * 0.3;
  float threshold3 = 0.3 + mouseEffect * 0.2;
  float threshold4 = 0.6 + mouseEffect * 0.1;
  
  vec3 finalColor = black;
  
  float smooth1 = smoothstep(threshold1 - 0.15, threshold1 + 0.15, combinedNoise);
  finalColor = mix(finalColor, color1, smooth1);
  
  float smooth2 = smoothstep(threshold2 - 0.15, threshold2 + 0.15, combinedNoise);
  finalColor = mix(finalColor, color2, smooth2);
  
  float smooth3 = smoothstep(threshold3 - 0.15, threshold3 + 0.15, combinedNoise);
  finalColor = mix(finalColor, color3, smooth3);
  
  float smooth4 = smoothstep(threshold4 - 0.15, threshold4 + 0.15, combinedNoise);
  finalColor = mix(finalColor, color4, smooth4);
  
  float smooth5 = smoothstep(0.8 + mouseEffect * 0.1, 1.0 + mouseEffect * 0.1, combinedNoise);
  finalColor = mix(finalColor, black, smooth5);
  
  float grain1 = fract(sin(dot(uv * 40.0, vec2(12.9898, 78.233))) * 43758.5453);
  float grain2 = fract(sin(dot(uv * 80.0, vec2(93.9898, 67.345))) * 24634.6345);
  float grain3 = fract(sin(dot(uv * 120.0, vec2(41.231, 23.357))) * 15678.2345);
  
  grain1 = (grain1 - 0.9) * 0.15;
  grain2 = (grain2 - 0.9) * 0.1;
  grain3 = (grain3 - 0.9) * 0.05;
  
  float combinedGrain = grain1 + grain2 + grain3;
  finalColor.rgb += combinedGrain;
  
  if (length(mouse) > 0.1) {
    float aberration = mouseEffect * 0.1;
    finalColor.r = mix(finalColor.r, finalColor.r + aberration, 0.3);
    finalColor.b = mix(finalColor.b, finalColor.b - aberration, 0.3);
  }
  
  gl_FragColor = vec4(finalColor, 1.0);
}
`
