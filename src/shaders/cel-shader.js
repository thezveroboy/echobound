// Painterly cel-shading + toon outline
export const celVertexShader = `
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying vec3 vWorldPosition;
  varying float vHeight;

  void main() {
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPos.xyz;
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    vHeight = position.y;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const celFragmentShader = `
  uniform vec3 uColor;
  uniform vec3 uShadowColor;
  uniform vec3 uHighlightColor;
  uniform float uRimPower;
  uniform vec3 uRimColor;
  uniform vec3 uAmbientLight;
  uniform vec3 uMainLightDir;
  uniform vec3 uMainLightColor;
  uniform bool uUseHeightColor;
  uniform vec3 uLowColor;
  uniform vec3 uHighColor;

  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying vec3 vWorldPosition;
  varying float vHeight;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(vViewPosition);

    // Main light
    vec3 lightDir = normalize(uMainLightDir);
    float NdotL = dot(normal, lightDir);

    // Cel-step lighting (3 bands)
    float lightBand = smoothstep(0.0, 0.4, NdotL);
    float midBand = smoothstep(0.0, 0.2, NdotL) * 0.5;

    // Base color with height blend
    vec3 baseColor = uColor;
    if (uUseHeightColor) {
      float h = (vHeight + 10.0) / 30.0;
      baseColor = mix(uLowColor, uHighColor, clamp(h, 0.0, 1.0));
    }

    vec3 shadowed = baseColor * uShadowColor;
    vec3 lit = baseColor;

    // Ambient
    vec3 ambient = baseColor * uAmbientLight;

    // Diffuse
    vec3 diffuse = mix(shadowed, lit, lightBand);
    diffuse = mix(diffuse, lit * 1.2, smoothstep(0.6, 1.0, NdotL) * 0.3);

    // Main light contribution
    vec3 finalColor = ambient + diffuse * uMainLightColor;

    // Rim light (backlight)
    float rim = 1.0 - max(0.0, dot(normal, viewDir));
    rim = pow(rim, uRimPower);
    vec3 rimLight = uRimColor * rim * 0.6;

    // Specular (soft)
    vec3 halfVec = normalize(lightDir + viewDir);
    float spec = pow(max(dot(normal, halfVec), 0.0), 16.0);
    vec3 specColor = vec3(1.0) * spec * 0.3;

    finalColor += rimLight + specColor;

    // Toon outline via fresnel
    float outline = 1.0 - max(0.0, dot(normal, viewDir));
    outline = smoothstep(0.7, 0.75, outline);
    finalColor *= (1.0 - outline * 0.6);

    // Painterly warmth
    finalColor = pow(finalColor, vec3(0.85));

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

// Post-processing for painterly bloom & tone mapping
export const bloomFragmentShader = `
  uniform sampler2D tDiffuse;
  uniform float uIntensity;

  varying vec2 vUv;

  void main() {
    vec4 color = texture2D(tDiffuse, vUv);

    // Soft bloom extract
    vec3 bloom = max(color.rgb - 0.6, 0.0);
    bloom *= bloom * 0.5;

    // Vignette
    vec2 center = vUv - 0.5;
    float vignette = 1.0 - dot(center, center) * 0.6;

    color.rgb += bloom * uIntensity;
    color.rgb *= vignette;

    // Soft painterly curve
    color.rgb = pow(color.rgb, vec3(0.92));

    gl_FragColor = color;
  }
`;

export const bloomVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
